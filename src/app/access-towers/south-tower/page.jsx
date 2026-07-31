import Aminities from '../../components/Aminities';
import Image from "next/image";

export default function SouthTower() {
    return (
        <>
            <section className="tower-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 order-md-last">
                            <div className="img-cont">
                                <Image
                                    src="/img/north-tower-fimg1.png"
                                    alt="Access Realties"
                                    className="img-fluid"
                                    width={600}
                                    height={800}
                                />
                                <a href="#" className="btn-theme1 btn">Floor Plans</a>
                                <a href="#" className="btn-theme1 btn">Inquire Now</a>
                            </div>
                        </div>
                        <div className="col-md-9 intro-cont order-md-first">

                            <div className="intro-itm">
                                <h1>South Tower</h1>
                                {/* <h6>Creating Vibrant and Energetic Work Environments</h6> */}
                                <p>
                                    Set within one of Colombo’s most connected commercial corridors, Access Tower II gives
                                    businesses a prestigious address with the convenience, visibility and daily accessibility modern
                                    organizations expect. Known as the South Tower, this G+29-storey Grade-A commercial office
                                    complex offers approximately 200,000 sq. ft. of state-of-the-art office space for companies
                                    seeking a premium workplace in Colombo. Supported by contemporary amenities and
                                    professional property management, Access Tower II creates an elevated corporate
                                    environment where businesses can grow, connect and operate with confidence, while enjoying
                                    sweeping city views that extend across Beira Lake, the Indian Ocean and Colombo’s dynamic
                                    skyline.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="snapshot-banner-sec">
                <Image
                    src="/img/north-tower-snap-banner.jpg"
                    alt="Access Realties"
                    className="img-fluid"
                    width={2000}
                    height={486}
                />
            </section>

            <Aminities />

            {/* <section className="our-clients-sec">
                <div className="container">
                    <h2>Our Clients</h2>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="client-itm">
                                <Image
                                    src="/img/client1.jpg"
                                    alt="Air Conditioning"
                                    className="img-fluid"
                                    width={200}
                                    height={130}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}