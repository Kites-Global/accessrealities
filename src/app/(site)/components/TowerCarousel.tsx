"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

interface ImageTypes {
    src: string;
    alt: string | "";
}

export default function TowerCarousel({ images = [] }: { images: ImageTypes[] }) {
    const autoplay = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [autoplay.current]
    );

    // Track the active slide for the dots
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    // Update selected index when the carousel changes
    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    if (!images.length) return null;

    return (
        <section className="tower-banner-carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((img, idx) => (
                        <div className="embla__slide" key={idx}>
                            <div className="banner-slide-item">
                                <Image
                                    src={img.src}
                                    alt={img.alt || `Tower snapshot ${idx + 1}`}
                                    width={1200}
                                    height={600}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="carousel-nav-btn prev d-none d-md-flex"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    type="button"
                    className="carousel-nav-btn next d-none d-md-flex"
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>

                <div className="embla__dots d-flex d-md-none">
                    {images.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            className={`embla__dot${index === selectedIndex ? " is-selected" : ""}`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to image ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}