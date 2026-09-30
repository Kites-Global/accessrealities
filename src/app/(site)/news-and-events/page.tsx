import { prisma } from "@/lib/admin/db";
import { mediaSrc } from "@/lib/admin/media";
import NewsEventsGrid from "./NewsEventsGrid";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "News & Events | Access Realties",
    description: "Stay updated with the latest news, events and developments from Access Realties (Pvt) Ltd, shaping modern business environments in Colombo.",
};
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
        imageUrl: mediaSrc(post.imageUrl),
    }));

    return (
        <>
            <section className="news-events-page-banner contact-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>News & Events</h1>
                        <h6>Stay updated with the latest news, events and developments from Access Realties.</h6>
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
