"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type Client = {
    id?: string | number;
    src: string;
    alt?: string;
};

type OurClientProps = {
    title?: string;
    clients?: Client[];
};

export default function OurClient({ title = "OUR CLIENTS", clients = [] }: OurClientProps) {
    const autoplay = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "start" },
        [autoplay.current]
    );

    return (
        <div className="container our-client py-4 mt-5 mb-5">
            {/* Title with red accent line */}
            <div className="d-flex align-items-center mb-4">
                {/* <div className="accent-bar me-3"></div> */}
                <h2 className="section-title mb-0">{title}</h2>
            </div>

            {/* Embla Carousel */}
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container gap-5 d-flex align-items-center">
                    {clients.map((client, index) => (
                        <div key={client.id || index} className="embla__slide">
                            <Image
                                src={client.src}
                                alt={client.alt || `Client logo ${index + 1}`}
                                width={150}
                                height={150}
                                className="client-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}