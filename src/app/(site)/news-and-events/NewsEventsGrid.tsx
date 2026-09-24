"use client";

import { useState } from "react";
import NewsAndEvents from "../components/NewsAndEvents";

type NewsEventItem = {
    id: string;
    title: string;
    date: string;
    desc: string;
    imageUrl?: string | null;
};

export default function NewsEventsGrid({ items }: { items: NewsEventItem[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    return (
        <>
            <div className="news-grid">
                {currentItems.map((item) => (
                    <NewsAndEvents key={item.id} data={item} />
                ))}
            </div>

            {totalPages > 1 && (
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
            )}
        </>
    );
}
