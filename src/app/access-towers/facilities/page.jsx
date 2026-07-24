import Image from "next/image";
import ExperienceGallery from "../../components/ExperienceGallery";

const galleryImages1 = [
    { src: "/img/experiences-img1.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img2.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img3.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img4.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img5.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img6.jpg", alt: "Members Lounge" },
];
const galleryImages2 = [
    { src: "/img/experiences-img2.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img3.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img4.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img5.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img6.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img1.jpg", alt: "Members Lounge" },
];
const galleryImages3 = [
    { src: "/img/experiences-img3.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img4.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img5.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img6.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img1.jpg", alt: "Members Lounge" },
    { src: "/img/experiences-img2.jpg", alt: "Members Lounge" },
];

export default function experiences() {
    return (
        <>
            <section className="experiences-page-banner">
                <div className="intro-itm">
                    <h1>Facilities</h1>
                    <h6>Everything you need, within one connected business address.</h6>
                    <a href="#" className="btn-theme1 btn">Inquire Now</a>
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
                                    Members Lounge
                                </h2>
                                <p>
                                    Located on the 29th floor of Access Tower II, the Members’ Lounge offers an exclusive business lounge in Colombo for professionals who value privacy, comfort and distinction. Operated in partnership with Elevate by Jetwing, it features plush seating, private dining rooms, tailored service and premium lifestyle amenities, creating a refined setting for business networking, corporate entertaining and relaxed moments above the city.
                                </p>
                                <p className="mb-0">
                                    To discover membership privileges and exclusive inclusions,
                                </p>
                                <p>
                                    Contact <a href="#">070 627 5517</a> or email <a href="#">fnb.virticle@jetwinghotels.com</a>
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
                                    Members Lounge
                                </h2>
                                <p>
                                    Located on the 29th floor of Access Tower II, the Members’ Lounge offers an exclusive business lounge in Colombo for professionals who value privacy, comfort and distinction. Operated in partnership with Elevate by Jetwing, it features plush seating, private dining rooms, tailored service and premium lifestyle amenities, creating a refined setting for business networking, corporate entertaining and relaxed moments above the city.
                                </p>
                                <p className="mb-0">
                                    To discover membership privileges and exclusive inclusions,
                                </p>
                                <p>
                                    Contact <a href="#">070 627 5517</a> or email <a href="#">fnb.virticle@jetwinghotels.com</a>
                                </p>
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
                                    Members Lounge
                                </h2>
                                <p>
                                    Located on the 29th floor of Access Tower II, the Members’ Lounge offers an exclusive business lounge in Colombo for professionals who value privacy, comfort and distinction. Operated in partnership with Elevate by Jetwing, it features plush seating, private dining rooms, tailored service and premium lifestyle amenities, creating a refined setting for business networking, corporate entertaining and relaxed moments above the city.
                                </p>
                                <p className="mb-0">
                                    To discover membership privileges and exclusive inclusions,
                                </p>
                                <p>
                                    Contact <a href="#">070 627 5517</a> or email <a href="#">fnb.virticle@jetwinghotels.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="amenities-sec">
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
            </section>
        </>
    );
}