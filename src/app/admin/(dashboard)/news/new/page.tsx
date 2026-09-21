import { createNews } from "@/lib/admin/actions/news";
import NewsForm from "../NewsForm";

export default function NewNewsPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1>New News Post</h1>
      </div>
      <div className="admin-card">
        <NewsForm action={createNews} submitLabel="Create Post" />
      </div>
    </>
  );
}
