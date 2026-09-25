import Image from "next/image";
import Aminities from '../../components/Aminities';
import OurClient from "../../components/OurClients";
import TowerCarousel from "../../components/TowerCarousel";
import { DownloadFloorPlanForm } from "../../components/PopupForms";

const towerImages = [
    { src: "/img/gallery/1.jpg", alt: "1" },
    { src: "/img/gallery/2.jpg", alt: "2" },
    { src: "/img/gallery/3.jpg", alt: "3" },
    { src: "/img/gallery/4.jpg", alt: "4" },
    { src: "/img/gallery/5.jpg", alt: "5" },
    { src: "/img/gallery/6.jpg", alt: "6" },
    { src: "/img/gallery/7.jpg", alt: "7" },
    { src: "/img/gallery/8.jpg", alt: "8" },
    { src: "/img/gallery/9.jpg", alt: "9" },
    { src: "/img/gallery/10.jpg", alt: "10" },
];

export default function NorthTower() {
    const ourClients = [
        { id: 2, src: "/img/ob-2.jpg" },
        { id: 4, src: "/img/ob-4.png" },
        { id: 5, src: "/img/ob-5.png" },
        { id: 6, src: "/img/ob-6.png" },
        { id: 1, src: "/img/ob-1.jpg" },
        { id: 7, src: "/img/ob-2.jpg" },
        { id: 9, src: "/img/ob-4.png" },
        { id: 10, src: "/img/ob-5.png" },
        { id: 11, src: "/img/ob-6.png" },
        { id: 12, src: "/img/ob-1.jpg" },
    ];

    return (
        <>
            <section className="north-page tower-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 intro-cont">
                            <div className="intro-itm">
                                <h1>North Tower</h1>
                                <p>
                                    Located in the heart of Union Place, Colombo 02, Access Towers I, known as the North Tower,
                                    offers more than office space; it offers businesses a recognized corporate address with long
                                    standing credibility. The 12-storey commercial office complex features approximately 120,000
                                    sq. ft. of professionally managed workspace, supported by modern facilities, corporate
                                    amenities and the trusted standards of Access Realties (Pvt) Ltd. Anchored by the presence of
                                    Access Engineering PLC and complemented by a strong community of leading corporate
                                    tenants, the North Tower continues to be a sought-after destination for companies looking for
                                    premium office space in Colombo with the confidence, convenience and reputation of the
                                    Access name.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-cont">
                                <Image
                                    src="/img/north-tower-fimg1.png"
                                    alt="Access Realties"
                                    className="img-fluid"
                                    width={600}
                                    height={800}
                                />
                                <DownloadFloorPlanForm />
                                {/* <a href="#" rel="noopener noreferrer" className="btn-theme1 btn">
                                    Floor Plans <i className="bi bi-cloud-download" aria-hidden="true"></i>
                                </a> */}
                                {/* <a href="/contact" className="btn-theme1 btn">Inquire Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Replaced Snapshot Banner */}
            <TowerCarousel images={towerImages} />

            <Aminities />

            <OurClient clients={ourClients} />

        </>
    );
}