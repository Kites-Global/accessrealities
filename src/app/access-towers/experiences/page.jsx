import Image from "next/image";
import ExperienceGallery from "../../components/ExperienceGallery";
import { FacilitiesInquiryForm } from "../../components/PopupForms";


const galleryImages1 = [
    { src: "/img/experiences-lounge-1.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-lounge-2.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-lounge-3.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-lounge-4.jpg", alt: "Members Lounge" },
];
const galleryImages2 = [
    { src: "/img/experiences-grind-1.jpg", alt: "Grind" },
    { src: "/img/experiences-grind-2.jpg", alt: "Grind" },
    { src: "/img/experiences-grind-3.jpg", alt: "Grind" },
    { src: "/img/experiences-grind-4.jpg", alt: "Grind" },
];
const galleryImages3 = [
    { src: "/img/experiences-virticle-1.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-2.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-3.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-4.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-5.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-6.jpg", alt: "Virticle by Jetwing" },
    { src: "/img/experiences-virticle-7.jpg", alt: "Virticle by Jetwing" },
];

const galleryImages4 = [
    { src: "/img/experiences-kfc-1.jpg", alt: "KFC" },
    { src: "/img/experiences-kfc-2.jpg", alt: "KFC" },
    { src: "/img/experiences-kfc-3.jpg", alt: "KFC" },
];

const galleryImages5 = [
    { src: "/img/experiences-pns-1.jpg", alt: "PNS" },
    { src: "/img/experiences-pns-2.jpg", alt: "PNS" },
    { src: "/img/experiences-pns-3.jpg", alt: "PNS" },
];

const galleryImages6 = [
    { src: "/img/experiences-boc-1.jpg", alt: "BOC" },
    { src: "/img/experiences-boc-2.jpg", alt: "BOC" },
];


export default function experiences() {
    return (
        <>
            <section className="experiences-page-banner">
                <div className="intro-itm">
                    <h1>Experiences</h1>
                    {/* <h6>Everything you need, within one connected business address.</h6> */}
                    {/* <a href="/contact" className="btn-theme1 btn">Inquire Now</a> */}
                    <FacilitiesInquiryForm />
                </div>
            </section>

            <section className="experience-sec">
                <div className="container">
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont">
                            <ExperienceGallery images={galleryImages1} />
                        </div>
                        <div className="col-md-7 experience-info-cont">
                            <div>
                                <h2>
                                    Members’ Lounge at Access Tower II
                                </h2>
                                <p>
                                    Located on the 29th floor of Access Tower II, the Members’ Lounge offers an exclusive business
                                    lounge in Colombo for professionals who value privacy, comfort and distinction. Operated in
                                    partnership with Elevate by Jetwing, it features plush seating, private dining rooms, tailored
                                    service and premium lifestyle amenities, creating a refined setting for business networking,
                                    corporate entertaining and relaxed moments above the city. </p>
                                <p>
                                    To discover membership privileges and exclusive inclusions, contact <a href="tel:+94 70 627 5517">+94 70 627 5517</a> or email <a href="mailto:fnb.virticle@jetwinghotels.com">fnb.virticle@jetwinghotels.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont order-md-last">
                            <ExperienceGallery images={galleryImages2} />
                        </div>
                        <div className="col-md-7 experience-info-cont order-md-first">
                            <div className="text-end">
                                <h2>
                                    Grind
                                </h2>
                                <p>
                                    Grind at Access Towers brings café culture into the rhythm of Colombo’s corporate day.
                                    Created for quick coffee runs, relaxed brunches, informal meetings and well-earned breaks, this
                                    specialty coffee bar and eatery offers a curated mix of quality coffee, fresh food and social
                                    energy within a modern business setting. From morning catch-ups to after-meeting
                                    conversations, Grind gives tenants, visitors and café-goers a stylish place to pause, recharge and
                                    connect in the heart of Colombo 02.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont">
                            <ExperienceGallery images={galleryImages3} />
                        </div>
                        <div className="col-md-7 experience-info-cont">
                            <div>
                                <h2>
                                    Virticle by Jetwing
                                </h2>
                                <p>
                                    Set high above the city at Access Tower II, Virticle by Jetwing brings a refined rooftop restaurant
                                    and bar experience to the heart of Colombo 02. Designed for elevated dining, sunset drinks,
                                    corporate gatherings and memorable nights out, Virticle combines curated cuisine, crafted
                                    beverages and a sophisticated atmosphere with sweeping views across Colombo’s cityscape. As
                                    one of the city’s standout rooftop venues, it adds a distinctive lifestyle and hospitality
                                    experience to Access Towers for tenants, visitors and guests seeking premium dining in
                                    Colombo.</p>
                                <p>
                                    For reservations and enquiries, call <a href="tel:+94707355355"> +94 70 735 5355</a> or email <a href="mailto:fnb@virticlebyjetwing.com">fnb@virticlebyjetwing.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont order-md-last">
                            <ExperienceGallery images={galleryImages4} />
                        </div>
                        <div className="col-md-7 experience-info-cont order-md-first">
                            <div className="text-end">
                                <h2>
                                    KFC
                                </h2>
                                <p>
                                    KFC at Access Towers adds everyday convenience to the Colombo 02 business experience,
                                    offering a familiar quick-service restaurant for lunch breaks, casual meals, takeaway orders and
                                    quick bites between meetings. With its well-known menu, central location and easy accessibility
                                    within the Access Towers environment, KFC supports the needs of busy professionals, visitors
                                    and corporate tenants looking for fast, convenient dining in Colombo. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont">
                            <ExperienceGallery images={galleryImages5} />
                        </div>
                        <div className="col-md-7 experience-info-cont">
                            <div>
                                <h2>
                                    P&S
                                </h2>
                                <p>
                                    P&S at Access Towers brings one of Sri Lanka’s most familiar food brands into the daily rhythm
                                    of Colombo’s corporate community. From quick breakfasts and teatime snacks to lunch,
                                    takeaway meals and casual bites between meetings, the outlet offers tenants, visitors and
                                    professionals a convenient dining option within the Access Towers environment. Backed by
                                    Perera & Sons’ long-standing legacy since 1902, it adds comfort, familiarity and everyday value
                                    to the workplace experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row experience-itm">
                        <div className="col-md-5 experience-img-gal-cont order-md-last">
                            <ExperienceGallery images={galleryImages6} />
                        </div>
                        <div className="col-md-7 experience-info-cont order-md-first">
                            <div className="text-end">
                                <h2>
                                    BOC
                                </h2>
                                <p>
                                    The Bank of Ceylon outlet adds practical value to the daily workplace experience, offering
                                    tenants, visitors and professionals’ easy access to trusted banking services during business
                                    hours. Its presence within the premises supports everyday financial needs with convenience,
                                    reliability and the assurance of one of Sri Lanka’s leading banking institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* <section className="amenities-sec">
                <div className="container">
                    <div className="intro-cont">
                        <h2>Amenities</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="row amenity-row">
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="amenity-itm">
                                <div className="img-cont">
                                    <Image
                                        src="/img/aminities-icon1.jpg"
                                        alt="Air Conditioning"
                                        className="img-fluid"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <h5>Air Conditioning</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}