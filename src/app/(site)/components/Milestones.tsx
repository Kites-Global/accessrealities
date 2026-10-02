"use client";
import { useRef, useState, useEffect } from "react";
type Milestone = {
    year: string;
    title: string;
    description: string;
};


const milestones: Milestone[] = [
    {
        year: "1998",
        title: "Access Tower I Completed",
        description:
            "Access Realties completed Access Tower I, a 12-storey commercial office landmark in Union Place, Colombo.",
    },
    {
        year: "2008",
        title: "Joined Access Engineering PLC",
        description:
            "Access Realties became a subsidiary of Access Engineering PLC, strengthening its commercial real estate and property management presence in Sri Lanka.",
    },
    {
        year: "2014",
        title: "Access Tower II Development Begins",
        description:
            "Access Realties expanded its property portfolio with the development of Access Tower II, a modern Grade-A office space in Colombo.",
    },
    {
        year: "2015/16",
        title: "A Trusted Corporate Address",
        description:
            "Access Towers achieved 100% occupancy, reflecting strong demand for premium, professionally managed office space in Colombo.",
    },
    {
        year: "2017",
        title: "Access Tower II Opens",
        description:
            "Access Tower II commenced operations, adding Grade-A commercial office space to Colombo’s growing corporate skyline.",
    },
    {
        year: "2021",
        title: "Groundbreaking Ceremony – West Tower",
        description:
            "The beginning of a new chapter in Access’ Union Place development.",
    },
    {
        year: "2023",
        title: "Opening Ceremony – West Tower",
        description:
            "Adding 285 parking bays and integrated commercial space to Colombo’s urban landscape.",
    },
    {
        year: "2026",
        title: "A Landmark in Commercial Real Estate",
        description:
            "Access Towers continues to be recognized as a premium business address for modern organizations in the heart of Colombo.",
    },
];


function MilestoneItem({ year, title, description }: Milestone) {
    return (
        <div className="col-md-3">
            <h2>{year}</h2>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    );
}
function Milestones() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);




    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
            setScrollProgress(progress);
        }
    };
    // Dragging Logic
    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging || !scrollRef.current || !trackRef.current) return;

            const deltaX = e.clientX - startX;
            const trackWidth = trackRef.current.clientWidth;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

            // Calculate how much the container should scroll based on mouse movement
            const scrollDelta = (deltaX / trackWidth) * maxScroll;
            scrollRef.current.scrollLeft = startScrollLeft + scrollDelta;
        };

        const handlePointerUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);
        }

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, [isDragging, startX, startScrollLeft]);
    
    return (
        <section className="milestornes-sec px-2">
            <div className="container">
                <h2 className="text-white text-uppercase">Milestones</h2>

                {/* COMBINED INTO A SINGLE DIV */}
                <div
                    className="milestones-row hide-native-scroll"
                    ref={scrollRef}
                    onScroll={handleScroll}
                    style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
                >
                    {milestones.map((milestone, index) => (
                        <MilestoneItem
                            key={index}
                            year={milestone.year}
                            title={milestone.title}
                            description={milestone.description}
                        />
                    ))}
                </div>

                {/* UPDATED TRACK AND THUMB WITH DRAG LOGIC */}
                {/* <div className= "custom-scrollbar-container">
                    <div className="custom-scrollbar-track" ref={trackRef}>
                        <div
                            className={`custom-scrollbar-thumb ${isDragging ? "dragging" : ""}`}
                            style={{ left: `${scrollProgress}%` }}
                            onPointerDown={(e) => {
                                e.preventDefault();
                                setIsDragging(true);
                                setStartX(e.clientX);
                                if (scrollRef.current) {
                                    setStartScrollLeft(scrollRef.current.scrollLeft);
                                }
                            }}
                        >
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Milestones