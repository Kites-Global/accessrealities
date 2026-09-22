import Image from "next/image";
import OurClient from "../../components/OurClients";
import TowerCarousel from "../../components/TowerCarousel";
import { DownloadFloorPlanForm } from "../../components/PopupForms";

const towerImages = [
    { src: "/img/facility-car-1.jpg", alt: "1" },
    { src: "/img/facility-car-2.jpg", alt: "2" },
    { src: "/img/facility-car-3.jpg", alt: "3" },
    { src: "/img/facility-car-1.jpg", alt: "1" },
    { src: "/img/facility-car-2.jpg", alt: "2" },
    { src: "/img/facility-car-3.jpg", alt: "3" },
];

export default function WestTower() {
    const ourClients = [
        { id: 2, src: "/img/ob-2.jpg" },
        { id: 3, src: "/img/ob-3.png" },
        { id: 4, src: "/img/ob-4.png" },
        { id: 5, src: "/img/ob-5.png" },
        { id: 6, src: "/img/ob-6.png" },
        { id: 1, src: "/img/ob-1.jpg" },
        { id: 7, src: "/img/ob-2.jpg" },
        { id: 8, src: "/img/ob-3.png" },
        { id: 9, src: "/img/ob-4.png" },
        { id: 10, src: "/img/ob-5.png" },
        { id: 11, src: "/img/ob-6.png" },
        { id: 12, src: "/img/ob-1.jpg" },
    ];

    return (
        <>
            <section className="west-page tower-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 intro-cont">
                            <div className="intro-itm">
                                <h1>West Tower</h1>
                                <p>
                                    Initiated in partnership with the Urban Development Authority (UDA), West Tower is an eight-storey commercial development by Access Engineering PLC, representing an investment of Rs. 1.4 billion. Located on Union Place, Colombo, the facility integrates parking capacity for up to 300 vehicles with over 20,000 sq. ft. of retail and office space, creating an extension of the Access Tower commercial ecosystem.
                                </p>
                                <p>
                                    Operating under a Design-Build-Finance-Operate-Transfer (DBFOT) model, Access Engineering PLC will manage the facility during the agreed lease period before ownership is transferred to the UDA. The facility is operated and managed by Access Realties (Pvt) Ltd, with a shared maintenance framework connecting it to the wider Access Tower complex.
                                </p>
                                <p>
                                    Located alongside the Access North and South Towers, West Tower provides additional parking and commercial infrastructure for the public and surrounding businesses, helping address parking demand and ease traffic congestion within one of Colombo&apos;s busiest commercial areas.
                                </p>
                                <p>
                                    Designed with accessibility, security and convenience in mind, the facility offers a modern parking experience while providing direct pedestrian connectivity to the Access Tower complex. Its strategic location and integrated commercial spaces further strengthen the development as a contemporary urban destination in the heart of Colombo.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-cont">
                                <Image
                                    src="/img/west-tower-img1.png"
                                    alt="Access Realties"
                                    className="img-fluid"
                                    width={600}
                                    height={800}
                                />
                                <DownloadFloorPlanForm />
                                {/* <a href="#" className="btn-theme1 btn">Floor Plans</a> */}
                                {/* <a href="/contact" className="btn-theme1 btn">Inquire Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Replaced Snapshot Banner */}
            <TowerCarousel images={towerImages} />

            <div className="west-tower-fearures">
                <div className="container">
                    <h2>West Tower Features</h2>
                    <p>Modern Commercial and Parking Infrastructure in the Heart of Colombo.</p>

                    <div className="row features-row">
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-1.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>Parking Capacity
                                    for <br />
                                    300 Vehicles</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-2.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>24/7 Monitored<br />
                                    Security </h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-3.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>Wide Dual-Lane <br />
                                    Entry & Exit  </h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-4.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>SUV & Commercial<br />
                                    Vehicle Friendly </h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-5.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>Parking Availability<br />
                                    Indicators</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-6.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>Digital Parking<br />
                                    Time-Stamping  </h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="feature-itm">
                                <Image
                                    src="/img/feature-icon-7.png"
                                    alt="Air Conditioning"
                                    className="img-fluid c-size"
                                    width={100}
                                    height={100}
                                />
                                <h5>Direct Elevator Access<br />
                                    to Access Towers </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <OurClient clients={ourClients} />
            </main>
        </>
    );
}