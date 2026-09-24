import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { mediaSrc } from "@/lib/admin/media";

export const dynamic = "force-dynamic";

const FALLBACK_IMAGE = "/img/news-events-img.jpg";

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
    // The listing links by slug, but an id still resolves for older/bookmarked links.
    const { id } = await params;
    const post = await prisma.newsPost.findFirst({
        where: { published: true, OR: [{ slug: id }, { id }] },
    });
    if (!post) notFound();

    const imageSrc = mediaSrc(post.imageUrl);

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
                                src={imageSrc || FALLBACK_IMAGE}
                                alt={post.title}
                                className="img-fluid news-detail-img"
                                width={imageSrc ? 640 : 850}
                                height={imageSrc ? 427 : 567}
                            />
                        </div>

                        <div className="col-md-6 px-md-4">
                            <p className="news-detail-date">{date}</p>
                            <h2>{post.title}</h2>
                            <div
                                className="news-detail-content"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
