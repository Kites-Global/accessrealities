import Image from "next/image";

export default function OurJourney() {
    return (
        <>
            <section className="our-journey-page-banner">
                <div className="container">
                    <div className="intro-itm">
                        <h1>Our Journey</h1>
                    </div>

                </div>
            </section>

            <section className="our-journey-sec">
                <div className="container">
                    <div className="row intro-itm">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <h2>Access Realties</h2>
                            <div className="sub-page-title">
                                <h3>A trusted name shaping modern business environments in Colombo.</h3>
                            </div>
                            <p>More than a commercial real estate company, it is a service-led property partner creating premium workplace environments in the heart of Colombo. Backed by Access Engineering PLC and the wider strength of the Access Group, the company brings together property expertise, operational reliability and a clear understanding of what today’s businesses expect from a modern workplace.</p>
                            <p>From premium office space and professional property management to everyday facilities, lifestyle experiences and tenant support, Access Realties is focused on making work environments feel efficient, connected and complete. Its approach goes beyond managing buildings; it is about creating places where companies can welcome clients, support their teams, build culture and grow with confidence.</p>
                            <p>At the center of this journey are Access Tower I, the North Tower, and Access Tower II, the South Tower, two recognized commercial office addresses in Union Place, Colombo 02. Together, they reflect the company’s continued commitment to high-quality office space in Colombo, combining location advantage, corporate convenience and the trusted reputation of the Access name.</p>
                            <p>As part of a diversified group with strong foundations in engineering, construction, property, technology, healthcare, automotive and other key sectors, Access Realties carries the confidence of a brand built on long-term value. Looking ahead, the company remains committed to evolving with the needs of modern organizations by enhancing workplace experiences, strengthening client service and developing future-ready commercial spaces that help businesses perform better, </p>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <div className="img-cont">
                                <img src="/img/our-journey-img1.png" alt="access tower" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="row intro-itm">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 px-3">
                            <h2>Our Vision</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="col-md-5 px-3">
                            <h2>Mission</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        </>
    );
}