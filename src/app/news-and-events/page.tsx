"use client";

import { useState } from "react";
import NewsAndEvents from "../components/NewsAndEvents";

// Dummy data
const mockData = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    title: `SED UT PERSPICIATIS UNDE OMNIS ${i + 1}`,
    date: "June 30, 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}));

export default function Contact() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(mockData.length / itemsPerPage);

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
                    <div className="news-grid">
                        {currentItems.map((item) => (
                            <NewsAndEvents key={item.id} data={item} />
                        ))}
                    </div>

                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={currentPage === index + 1 ? "active" : ""}
                            >
                                {/* Format numbers 1 to 01 */}
                                {String(index + 1).padStart(2, '0')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}