import { notFound } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { updateNews } from "@/lib/admin/actions/news";
import NewsForm from "../../NewsForm";

export default async function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.newsPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <>
      <div className="admin-topbar">
        <h1>Edit News Post</h1>
      </div>
      <div className="admin-card">
        <NewsForm
          action={updateNews.bind(null, post.id)}
          defaultValues={{
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            published: post.published,
            imageUrl: post.imageUrl,
          }}
          submitLabel="Save Changes"
        />
      </div>
    </>
  );
}
