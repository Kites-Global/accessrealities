"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";

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

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <div className="facility-embla-carousel">
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

            <div className="embla__nav">
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
        </div>
    );
}
