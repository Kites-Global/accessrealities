"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

const facilities = [
    { image: "/img/home-facility-1.jpg", title: "Meeting Room" },
    { image: "/img/home-facility-2.jpg", title: "Engagement Zones" },
    { image: "/img/home-facility-3.jpg", title: "Elevate GYM" },
    { image: "/img/home-facility-4.jpg", title: "Zen Garden" },
    { image: "/img/home-facility-5.jpg", title: "Car Parking" },
    { image: "/img/home-facility-6.jpg", title: "Advertising" },
];

export default function EmblaCarousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 3000,
        })
    );
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [autoplay.current]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    // Track the active slide for the dots
    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="facility-embla-carousel position-relative">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {facilities.map((facility, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="item">
                                <Image
                                    src={facility.image}
                                    alt={facility.title}
                                    className="img-fluid"
                                    width={800}
                                    height={700}
                                />
                                <div className="overlay">
                                    <div>
                                        <h5>{facility.title}</h5>
                                        <a href="/contact" className="btn btn-theme1">Inquire now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows: Hidden on mobile (d-none), visible on large screens (d-lg-block) */}
            <div className="embla__nav d-none d-lg-block">
                <button
                    type="button"
                    className="embla__prev"
                    onClick={scrollPrev}
                    aria-label="Previous facility"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    type="button"
                    className="embla__next"
                    onClick={scrollNext}
                    aria-label="Next facility"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>

            {/* Dots: Visible on mobile (d-flex), hidden on large screens (d-lg-none) */}
            <div className="embla__dots d-flex d-lg-none">
                {facilities.map((_, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to facility ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}