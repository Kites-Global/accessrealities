import Link from "next/link";
import { prisma } from "@/lib/admin/db";
import { buildQuery } from "@/lib/admin/search-params";
import { isTower, towerLabel } from "@/lib/floorPlans";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

type Params = { q?: string; page?: string };

export default async function FlowPlanDownloadsPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const page = Math.max(1, Number(params.page) || 1);

  const where = q ? { OR: [{ name: { contains: q } }, { email: { contains: q } }] } : {};

  const [downloads, total] = await Promise.all([
    prisma.floorPlanDownload.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.floorPlanDownload.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <>
      <div className="admin-topbar">
        <h1>Flow-plan downloads</h1>
      </div>

      <div className="admin-card">
        <form method="GET" className="admin-search-bar">
          <input type="text" name="q" defaultValue={q} placeholder="Search by name or email…" />
          <button type="submit" className="admin-btn admin-btn-secondary">
            Search
          </button>
          {q && (
            <Link href="/admin/flow-plan-downloads" className="admin-btn admin-btn-secondary">
              Clear
            </Link>
          )}
        </form>

        {downloads.length === 0 ? (
          <p className="admin-empty">{q ? "No downloads match your search." : "No downloads yet."}</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Flow plan</th>
                  <th>Requested at (SLST)</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((d) => (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{isTower(d.tower) ? towerLabel(d.tower) : d.tower}</td>
                    <td>{d.createdAt.toLocaleString("en-GB", { timeZone: "Asia/Colombo" })}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="admin-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/admin/flow-plan-downloads${buildQuery(params, { page: p === 1 ? undefined : p })}`}
                    className={p === page ? "is-active" : ""}
                  >
                    {p}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
