"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type NewsEventData = {
    date: string;
    title: string;
    desc: string;
};

export default function NewsEvents({ data }: { data: NewsEventData }) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [lines, setLines] = useState<number | undefined>(undefined);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const availableHeight = el.clientHeight;
        const lineHeight = parseFloat(window.getComputedStyle(el).lineHeight);
        const maxLines = Math.floor(availableHeight / lineHeight);

        setLines(maxLines);
    }, []);

    return (
        <div className="news-events-card">
            <Image src="/img/news-events-img.jpg" alt="News and Events" width={600} height={400} />
            <p>{data.date}</p>
            <h6>{data.title}</h6>
            <p
                className="dynamic-clamp"
                ref={textRef}
                style={{ WebkitLineClamp: lines }}
            >
                {data.desc}
            </p>
            <a href="#" className="btn-theme1 btn">read more</a>
        </div>
    )
}