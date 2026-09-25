"use client";

import Image from "next/image";
import React from "react";

export type Amenity = {
    id?: string | number;
    icon: string;
    title: React.ReactNode;
    alt?: string;
    className?: string;
};

export const defaultAmenities: Amenity[] = [
    {
        id: 1,
        icon: "/img/aminities-icon-1.png",
        title: "Air Conditioning",
        alt: "Air Conditioning",
    },
    {
        id: 2,
        icon: "/img/aminities-icon-2.png",
        title: "100% Backup Power",
        alt: "100% Backup Power",
    },
    {
        id: 3,
        icon: "/img/aminities-icon-3.png",
        title: "Fire & Life Safety",
        alt: "Fire & Life Safety",
    },
    {
        id: 4,
        icon: "/img/aminities-icon-4.png",
        title: "24/7 monitored security",
        alt: "24/7 monitored security",
    },
    {
        id: 5,
        icon: "/img/aminities-icon-5.png",
        title: "Connectivity",
        alt: "Connectivity",
    },
    {
        id: 6,
        icon: "/img/aminities-icon-6.png",
        title: "EV Charging Stations",
        alt: "EV Charging Stations",
    },
    {
        id: 7,
        icon: "/img/aminities-icon-7.png",
        title: "Lifestyle & Tenant Conveniences",
        alt: "Lifestyle & Tenant Conveniences",
    },
    {
        id: 8,
        icon: "/img/aminities-icon-8.png",
        title: "Housekeeping & Maintenance Services",
        alt: "Housekeeping & Maintenance Services",
    },
];

export type AmenityItemProps = {
    icon: string;
    title: React.ReactNode;
    alt?: string;
    className?: string;
    colClassName?: string;
};

export function AmenityItem({
    icon,
    title,
    alt,
    className = "feature-itm amenity-itm",
    colClassName = "col-md-3 col-6",
}: AmenityItemProps) {
    return (
        <div className={colClassName}>
            <div className={className}>
                <Image
                    src={icon}
                    alt={alt || (typeof title === "string" ? title : "Amenity")}
                    className="img-fluid c-size"
                    width={100}
                    height={100}
                />
                <h5>{title}</h5>
            </div>
        </div>
    );
}


export const AmenityIcon = AmenityItem;

type AminitiesProps = {
    items?: Amenity[];
};

export default function Aminities({ items = defaultAmenities }: AminitiesProps) {
    return (
        <section className="amenities-sec">
            <div className="container">
                <div className="intro-cont">
                    <h2>Features</h2>
                    <p>
                        Designed around the demands of today’s workplace, our amenities provide the comfort,
                        reliability and operational support businesses need to perform with confidence every day.
                    </p>
                </div>
                <div className="row amenity-row">
                    {items.map((amenity, index) => (
                        <AmenityItem
                            key={amenity.id ?? index}
                            icon={amenity.icon}
                            title={amenity.title}
                            alt={amenity.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}