"use client";

import Image from "next/image";
import Link from "next/link";

export default function Aminities() {
    return (
        <section className="amenities-sec">
            <div className="container">
                <div className="intro-cont">
                    <h2>Amenities</h2>
                    <p>
                        Designed around the demands of today’s workplace, our amenities provide the comfort,
                        reliability and operational support businesses need to perform with confidence every day.</p>
                </div>
                <div className="row amenity-row">
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-1.png"
                                alt="Air Conditioning"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>Air Conditioning</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-2.png"
                                alt="100% Backup Power"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>100% Backup
                                Power</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-3.png"
                                alt="Fire & Life Safety"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>Fire & Life
                                Safety</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-4.png"
                                alt="24/7 monitored security"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>24/7 monitored
                                security</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-5.png"
                                alt="Connectivity"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>Connectivity</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-6.png"
                                alt="EV Charging Stations"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>EV Charging
                                Stations</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-7.png"
                                alt="Lifestyle & Tenant Conveniences"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>Lifestyle & Tenant
                                Conveniences</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="amenity-itm">
                            <Image
                                src="/img/aminities-icon-8.png"
                                alt="Housekeeping & Maintenance Services"
                                className="img-fluid c-size"
                                width={100}
                                height={100}
                            />
                            <h5>Housekeeping &
                                Maintenance Services</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}