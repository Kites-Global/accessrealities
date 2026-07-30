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
                    {/* <h6>Everything you need, within one connected business address.</h6> */}
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
                                    Meeting Room
                                </h2>
                                <p>
                                    Designed for moments that need focus, privacy and professionalism, the meeting room at
                                    Access Towers offers a polished setting for client meetings, presentations, interviews and
                                    business discussions. Located within a recognized commercial address in Colombo, it provides a
                                    convenient and reliable space for teams and professionals to meet with confidence. </p>
                                <p>
                                    For enquiries: Call <a href="#">+94 774 055 682</a> or email <a href="#">fme@accessrealties.com</a>
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
                                    Engagement Zones
                                </h2>
                                <p>
                                    Located within the North Tower, the Engagement Zones offer vendors and brands a practical
                                    open space to connect with a professional corporate audience. Ideal for pop-up stores, product
                                    promotions, sampling campaigns, brand activations and seasonal sales, these spaces create
                                    valuable visibility within a recognized commercial environment in Colombo. </p>
                                <p>
                                    For enquiries: Call <a href="#">+94 774 055 682</a> or email <a href="#">fme@accessrealties.com</a>
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
                                    Elevate Gym
                                </h2>
                                <p>
                                    Elevate Gym offers a refined fitness experience within Access Tower II, designed for
                                    professionals, tenants and wellness-focused individuals who value convenience, performance
                                    and balance. Operated and managed by ARL Elevate, the gym forms part of the tower’s
                                    premium lifestyle offering, giving members a dedicated space to train, recharge and maintain
                                    an active routine within Colombo’s modern corporate environment.  </p>

                                <p>
                                    For membership enquiries, call <a href="#"> +94 77 505 2342</a>
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
                                    Zen Garden
                                </h2>
                                <p>
                                    The Zen Garden offers a refreshing breakaway space for tenants, professionals and visitors to
                                    pause, reset and reconnect within a modern corporate environment. Designed to bring a sense
                                    of calm to the busy business day, it adds a valuable lifestyle amenity to Access Towers,
                                    supporting workplace wellbeing, informal conversations and moments of quiet reflection in the
                                    heart of Colombo 02. </p>
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
                                    Car Parking
                                </h2>
                                <p>
                                    Access Towers offers practical car parking facilities that add ease and efficiency to the daily
                                    business experience in Colombo 02. Supported by dedicated parking levels within Access Tower
                                    II and parking capacity for approximately 300 vehicles, the facility is designed to serve tenants,
                                    visitors and corporate guests with greater convenience. Positioned within one of Colombo’s
                                    recognized commercial office destinations, it helps make arrivals smoother, meetings easier
                                    and the workday seamless.
                                </p>
                                <p>
                                    For enquiries: Call <a href="#"> +94 774 055 682</a> or email <a href="#">fme@accessrealties.com</a>
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