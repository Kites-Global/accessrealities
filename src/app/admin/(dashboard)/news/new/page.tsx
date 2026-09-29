import { createNews } from "@/lib/admin/actions/news";
import { toDateInputValue } from "@/lib/admin/validators";
import NewsForm from "../NewsForm";

// Rendered per request so the date field defaults to today, not to build time.
export const dynamic = "force-dynamic";

export default function NewNewsPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1>New News Post</h1>
      </div>
      <div className="admin-card">
        <NewsForm
          action={createNews}
          defaultPublishedAt={toDateInputValue(new Date())}
          submitLabel="Create Post"
        />
      </div>
    </>
  );
}
