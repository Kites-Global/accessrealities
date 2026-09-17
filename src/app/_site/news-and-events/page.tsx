import { prisma } from "@/lib/admin/db";
import NewsEventsGrid from "./NewsEventsGrid";

export const dynamic = "force-dynamic";

export default async function NewsAndEventsPage() {
    const posts = await prisma.newsPost.findMany({
        where: { published: true },
        orderBy: { publishedAt: "desc" },
    });

    const items = posts.map((post) => ({
        id: post.slug,
        title: post.title,
        date: post.publishedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        desc: post.excerpt,
        imageUrl: post.imageUrl,
    }));

    return (
        <>
            <section className="news-events-page-banner contact-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>News & Events</h1>
                        <h6>Connect with Access Realties for office space enquiries, tenant support, facility information or general assistance. Our team is here to help you find the right solution.</h6>
                    </div>
                </div>
            </section>

            <div className="news-events-sec">
                <div className="container pb-5">
                    {items.length === 0 ? (
                        <p className="text-center text-white py-5">No news posts yet.</p>
                    ) : (
                        <NewsEventsGrid items={items} />
                    )}
                </div>
            </div>
        </>
    );
}
