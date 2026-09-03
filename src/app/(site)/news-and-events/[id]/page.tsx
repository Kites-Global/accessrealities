import Image from "next/image";
import Link from "next/link";

export default function NewsDetail({ params }: { params: { id: string } }) {
    return (
        <>
            {/* <section className="contact-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>News & Events</h1>
                    </div>
                </div>
            </section> */}

            <section className="news-detail-sec">
                <div className="container mt-5">
                    <Link href="/news-and-events" className="back-link">
                        <i className="bi bi-arrow-left"></i> Back to all news
                    </Link>

                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <Image src="/img/news-events-img.jpg" alt="News Image" className="img-fluid news-detail-img"
                                width={800} height={600} />
                        </div>

                        <div className="col-md-6 px-md-4">
                            <p className="news-detail-date">
                                June 30, 2026
                            </p>
                            <h2>
                                SED UT PERSPICIATIS UNDE OMNIS {params.id}
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}