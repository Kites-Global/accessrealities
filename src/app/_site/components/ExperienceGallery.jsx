"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function ExperienceGallery({ images = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on("select", onSelect);

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    return (
        <div className="experience-gallery-embla">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="img-fluid"
                                width={800}
                                height={600}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__nav">
                <button
                    type="button"
                    className="embla__prev"
                    onClick={scrollPrev}
                    aria-label="Previous image"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    type="button"
                    className="embla__next"
                    onClick={scrollNext}
                    aria-label="Next image"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>

            <div className="embla__dots">
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
    );
}
