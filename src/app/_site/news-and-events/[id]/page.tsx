import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/admin/db";

export const dynamic = "force-dynamic";

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await prisma.newsPost.findUnique({ where: { slug: id } });

    if (!post || !post.published) notFound();

    const date = post.publishedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <section className="news-detail-sec">
                <div className="container mt-5">
                    <Link href="/news-and-events" className="back-link">
                        <i className="bi bi-arrow-left"></i> Back to all news
                    </Link>

                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <Image
                                src={post.imageUrl || "/img/news-events-img.jpg"}
                                alt={post.title}
                                className="img-fluid news-detail-img"
                                width={800}
                                height={600}
                            />
                        </div>

                        <div className="col-md-6 px-md-4">
                            <p className="news-detail-date">
                                {date}
                            </p>
                            <h2>
                                {post.title}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
