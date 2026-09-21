import Link from "next/link";
import { prisma } from "@/lib/admin/db";
import { deleteNews, setNewsStatus } from "@/lib/admin/actions/news";
import { buildQuery } from "@/lib/admin/search-params";
import StatusToggle from "../components/StatusToggle";
import DeleteButton from "../components/DeleteButton";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

type SortKey = "title" | "publishedAt" | "published";
type Dir = "asc" | "desc";
type Params = { q?: string; sort?: string; dir?: string; page?: string };

function newsOrderBy(sort: SortKey, dir: Dir) {
  switch (sort) {
    case "title":
      return { title: dir };
    case "published":
      return { published: dir };
    default:
      return { publishedAt: dir };
  }
}

function SortHeader({ label, sortKey, params }: { label: string; sortKey: SortKey; params: Params }) {
  const currentSort: SortKey =
    params.sort === "title" || params.sort === "published" ? params.sort : "publishedAt";
  const isActive = currentSort === sortKey;
  const nextDir: Dir = isActive && params.dir === "asc" ? "desc" : "asc";
  const href = `/admin/news${buildQuery(params, { sort: sortKey, dir: nextDir, page: undefined })}`;

  return (
    <Link href={href} className="admin-sort-link">
      {label}
      {isActive && <span className="admin-sort-arrow">{params.dir === "asc" ? "▲" : "▼"}</span>}
    </Link>
  );
}

export default async function AdminNewsListPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const sort: SortKey =
    params.sort === "title" || params.sort === "published" ? params.sort : "publishedAt";
  const dir: Dir = params.dir === "asc" ? "asc" : "desc";
  const page = Math.max(1, Number(params.page) || 1);

  const where = q ? { title: { contains: q } } : {};

  const [posts, total] = await Promise.all([
    prisma.newsPost.findMany({
      where,
      orderBy: newsOrderBy(sort, dir),
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.newsPost.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <>
      <div className="admin-topbar">
        <h1>News &amp; Events</h1>
        <Link href="/admin/news/new" className="admin-btn">
          + New Post
        </Link>
      </div>

      <div className="admin-card">
        <form method="GET" className="admin-search-bar">
          <input type="text" name="q" defaultValue={q} placeholder="Search by title…" />
          <input type="hidden" name="sort" value={sort} />
          <input type="hidden" name="dir" value={dir} />
          <button type="submit" className="admin-btn admin-btn-secondary">
            Search
          </button>
          {q && (
            <Link href="/admin/news" className="admin-btn admin-btn-secondary">
              Clear
            </Link>
          )}
        </form>

        {posts.length === 0 ? (
          <p className="admin-empty">{q ? `No news posts match "${q}".` : "No news posts yet."}</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>
                    <SortHeader label="Title" sortKey="title" params={params} />
                  </th>
                  <th>
                    <SortHeader label="Date" sortKey="publishedAt" params={params} />
                  </th>
                  <th>
                    <SortHeader label="Status" sortKey="published" params={params} />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.publishedAt.toLocaleDateString()}</td>
                    <td>
                      <StatusToggle
                        id={post.id}
                        value={post.published ? "published" : "draft"}
                        options={[
                          { value: "published", label: "Published", tone: "positive" },
                          { value: "draft", label: "Draft", tone: "neutral" },
                        ]}
                        onChange={setNewsStatus}
                      />
                    </td>
                    <td>
                      <div className="admin-actions">
                        <Link href={`/admin/news/${post.id}/edit`} className="admin-btn admin-btn-secondary">
                          Edit
                        </Link>
                        <DeleteButton
                          action={deleteNews.bind(null, post.id)}
                          confirmMessage={`Delete "${post.title}"? This cannot be undone.`}
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
                    href={`/admin/news${buildQuery(params, { page: p === 1 ? undefined : p })}`}
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
