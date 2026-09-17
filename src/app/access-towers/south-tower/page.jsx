import Aminities from '../../components/Aminities';
import Image from "next/image";
import OurClient from "../../components/OurClients";
import TowerCarousel from "../../components/TowerCarousel";

const towerImages = [
    { src: "/img/experiences-grind-2.jpg", alt: "Café Space" },
    { src: "/img/experiences-lounge-2.jpg", alt: "Lounge Area" },
    { src: "/img/facility-meet-room-2.jpg", alt: "Conference Room" },
    { src: "/img/experiences-virticle-2.jpg", alt: "Rooftop" },
    { src: "/img/facility-gym-2.jpg", alt: "Elevate Gym" },
];

export default function SouthTower() {
    const ourClients = [
        { id: 1, src: "/img/st-1.png" },
        { id: 2, src: "/img/st-2.png" },
        { id: 3, src: "/img/st-3.png" },
        { id: 4, src: "/img/st-4.png" },
        { id: 5, src: "/img/st-5.png" },
        { id: 6, src: "/img/st-6.png" },
        { id: 7, src: "/img/st-7.png" },
        { id: 8, src: "/img/st-8.png" },
        { id: 9, src: "/img/st-9.png" },
        { id: 10, src: "/img/st-10.png" },
        { id: 11, src: "/img/st-11.png" },
        { id: 12, src: "/img/st-12.png" },
        { id: 13, src: "/img/st-13.png" },
        { id: 14, src: "/img/st-14.png" },
        { id: 15, src: "/img/st-15.png" },
        { id: 16, src: "/img/st-16.png" },
        { id: 17, src: "/img/st-17.png" },
    ];

    return (
        <>
            <section className="south-page tower-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 intro-cont">
                            <div className="intro-itm">
                                <h1>South Tower</h1>
                                <p>
                                    Set within one of Colombo s most connected commercial corridors, Access Tower II gives
                                    businesses a prestigious address with the convenience, visibility and daily accessibility modern
                                    organizations expect. Known as the South Tower, this G+29-storey Grade-A commercial office
                                    complex offers approximately 200,000 sq. ft. of state-of-the-art office space for companies
                                    seeking a premium workplace in Colombo. Supported by contemporary amenities and
                                    professional property management, Access Tower II creates an elevated corporate
                                    environment where businesses can grow, connect and operate with confidence, while enjoying
                                    sweeping city views that extend across Beira Lake, the Indian Ocean and Colombo s dynamic
                                    skyline.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-cont">
                                <Image
                                    src="/img/south-tower-fimg1.png"
                                    alt="Access Realties"
                                    className="img-fluid"
                                    width={600}
                                    height={800}
                                />
                                <a href="/pdf/10 FLOOR T2 (South Tower Floor Plan).pdf" target="_blank" rel="noopener noreferrer" className="btn-theme1 btn">Floor Plans</a>
                                <a href="/contact" className="btn-theme1 btn">Inquire Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Replaced Snapshot Banner */}
            <TowerCarousel images={towerImages} />

            <Aminities />
            <main>
                <OurClient clients={ourClients} />
            </main>
        </>
    );
}