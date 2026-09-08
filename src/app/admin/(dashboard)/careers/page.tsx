import Link from "next/link";
import { prisma } from "@/lib/admin/db";
import { deleteVacancy, setVacancyStatus } from "@/lib/admin/actions/vacancies";
import { buildQuery } from "@/lib/admin/search-params";
import StatusToggle from "../components/StatusToggle";
import DeleteButton from "../components/DeleteButton";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

type SortKey = "title" | "location" | "isOpen" | "createdAt";
type Dir = "asc" | "desc";
type Params = { q?: string; location?: string; sort?: string; dir?: string; page?: string };

function vacancyOrderBy(sort: SortKey, dir: Dir) {
  switch (sort) {
    case "title":
      return { title: dir };
    case "location":
      return { location: dir };
    case "isOpen":
      return { isOpen: dir };
    default:
      return { createdAt: dir };
  }
}

function SortHeader({ label, sortKey, params }: { label: string; sortKey: SortKey; params: Params }) {
  const isActive = params.sort === sortKey;
  const nextDir: Dir = isActive && params.dir === "asc" ? "desc" : "asc";
  const href = `/admin/careers${buildQuery(params, { sort: sortKey, dir: nextDir, page: undefined })}`;

  return (
    <Link href={href} className="admin-sort-link">
      {label}
      {isActive && <span className="admin-sort-arrow">{params.dir === "asc" ? "▲" : "▼"}</span>}
    </Link>
  );
}

export default async function AdminCareersListPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const location = params.location?.trim() || "";
  const sort: SortKey =
    params.sort === "title" || params.sort === "location" || params.sort === "isOpen"
      ? params.sort
      : "createdAt";
  const dir: Dir = params.dir === "asc" ? "asc" : "desc";
  const page = Math.max(1, Number(params.page) || 1);

  const where = {
    ...(q ? { title: { contains: q } } : {}),
    ...(location ? { location: { contains: location } } : {}),
  };

  const [vacancies, total] = await Promise.all([
    prisma.vacancy.findMany({
      where,
      orderBy: vacancyOrderBy(sort, dir),
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: { _count: { select: { applications: true } } },
    }),
    prisma.vacancy.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <>
      <div className="admin-topbar">
        <h1>Careers</h1>
        <Link href="/admin/careers/new" className="admin-btn">
          + New Vacancy
        </Link>
      </div>

      <div className="admin-card">
        <form method="GET" className="admin-search-bar">
          <input type="text" name="q" defaultValue={q} placeholder="Search by title…" />
          <input type="text" name="location" defaultValue={location} placeholder="Search by location…" />
          <input type="hidden" name="sort" value={sort} />
          <input type="hidden" name="dir" value={dir} />
          <button type="submit" className="admin-btn admin-btn-secondary">
            Search
          </button>
          {(q || location) && (
            <Link href="/admin/careers" className="admin-btn admin-btn-secondary">
              Clear
            </Link>
          )}
        </form>

        {vacancies.length === 0 ? (
          <p className="admin-empty">{q || location ? "No vacancies match your search." : "No vacancies yet."}</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>
                    <SortHeader label="Title" sortKey="title" params={params} />
                  </th>
                  <th>
                    <SortHeader label="Location" sortKey="location" params={params} />
                  </th>
                  <th>
                    <SortHeader label="Status" sortKey="isOpen" params={params} />
                  </th>
                  <th>Applicants</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr key={vacancy.id}>
                    <td>{vacancy.title}</td>
                    <td>{vacancy.location || "—"}</td>
                    <td>
                      <StatusToggle
                        id={vacancy.id}
                        value={vacancy.isOpen ? "open" : "closed"}
                        options={[
                          { value: "open", label: "Open", tone: "positive" },
                          { value: "closed", label: "Closed", tone: "neutral" },
                        ]}
                        onChange={setVacancyStatus}
                      />
                    </td>
                    <td>
                      <Link href={`/admin/careers/${vacancy.id}/applications`}>
                        {vacancy._count.applications}
                      </Link>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <Link href={`/admin/careers/${vacancy.id}/edit`} className="admin-btn admin-btn-secondary">
                          Edit
                        </Link>
                        <DeleteButton
                          action={deleteVacancy.bind(null, vacancy.id)}
                          confirmMessage={`Delete "${vacancy.title}"? This cannot be undone.`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="admin-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/admin/careers${buildQuery(params, { page: p === 1 ? undefined : p })}`}
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
