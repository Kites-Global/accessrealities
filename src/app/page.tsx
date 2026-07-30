import Image from "next/image";
import styles from "./page.module.css";
import EmblaCarousel from "./components/EmblaCarousel";

export default function Home() {
  return (
    <div>
      <section className="hero-sec">

        <div className="title-cont">
          <h6>Serviced Offices for Rent</h6>
          {/* <h1>
            Private Workspaces in the
            Heart of Colombo
          </h1> */}
          <h1>Defining Colombo’s Corporate Skyline </h1>
          <a href="#" className="btn-theme1 btn">Inquire Now</a>
        </div>

      </section>

      <section className="about-access-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7 info-cont">
              <div className="info-itm">
                <h2>Access Realties (Pvt) Ltd.</h2>
                <h6>Creating premium commercial spaces built for the way modern businesses work. </h6>
                <p>
                  Access Realties (Pvt) Ltd has long been part of Colombo’s evolving commercial real estate story,
                  contributing to the design, development and management of landmark business environments that
                  bring energy, efficiency and prestige to the city. Guided by the strength of Access, a name synonymous
                  with trust, quality and forward-thinking development in Sri Lanka, the company continues to create
                  premium office spaces that reflect the expectations of modern organizations. From contemporary
                  design to reliable facilities management, Access Realties remains focused on shaping vibrant, future
                  ready commercial spaces in Colombo where businesses can work, grow and thrive.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-cont">
                <Image
                  src="/img/about-access-sec-fimg.png"
                  alt="Access Realties"
                  className="img-fluid"
                  width={600}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="access-tower-sec">
        <div className="video-link-cont">
          <h3>
            ACCESS TOWERS
          </h3>
          <p>
            A closer look at premium commercial spaces built to support the way businesses work, connect and
            grow.
          </p>
          <a href="#">
            <i className="bi bi-play-circle-fill"></i>
          </a>
        </div>
      </section>

      <section className="south-north-tower-sec">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className="south-cont">
                <Image
                  src="/img/south-tower-bg.jpg"
                  alt="South Tower"
                  className="img-fluid"
                  width={800}
                  height={400}
                />
                <h3>South Tower</h3>
                <p>
                  A refined business address where elegant interiors, smart spaces and everyday convenience
                  come together.
                </p>
                <a href="#" className="btn">View gallery</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="north-cont">
                <Image
                  src="/img/north-tower-bg.jpg"
                  alt="North Tower"
                  className="img-fluid"
                  width={800}
                  height={400}
                />
                <h3>North Tower</h3>
                <p>
                  A contemporary corporate environment designed for seamless movement, modern work and
                  elevated business presence.
                </p>
                <a href="#" className="btn">View gallery</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="milestornes-sec px-2">
        <div className="container-fluid">
          <h2 className="text-white">Milestones</h2>
          <div className="milestones-row">
            <div className="col-md-3">
              <h2>1998</h2>
              <h6>Access Tower I Completed</h6>
              <p>
                Access Realties completed Access Tower I, a 12-storey commercial office landmark in Union
                Place, Colombo.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2008</h2>
              <h6>Joined Access Engineering PLC </h6>
              <p>
                Access Realties became a subsidiary of Access Engineering PLC, strengthening its commercial
                real estate and property management presence in Sri Lanka.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2014</h2>
              <h6>Access Tower II Development Begins</h6>
              <p>
                Access Realties expanded its property portfolio with the development of Access Tower II, a
                modern Grade-A office space in Colombo.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2015/16</h2>
              <h6>A Trusted Corporate Address</h6>
              <p>
                Access Towers achieved 100% occupancy, reflecting strong demand for premium, professionally
                managed office space in Colombo.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2017</h2>
              <h6>Access Tower II Opens </h6>
              <p>
                Access Tower II commenced operations, adding Grade-A commercial office space to Colombo’s
                growing corporate skyline.
              </p>
            </div>
            <div className="col-md-3">
              <h2>Present Day </h2>
              <h6>A Landmark in Commercial Real Estate </h6>
              <p>
                Access Towers continues to be recognized as a premium business address for modern
                organizations in the heart of Colombo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-sec">
        <div className="container">
          <div className="intro-cont">
            <h2>Facilities</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="facility-carousel-cont">
                <EmblaCarousel />
                {/* <div className="facility-owl-carousel owl-carousel owl-theme">
                  <div className="item">
                    <Image
                      src="/img/facility-1.jpg"
                      alt="Facility 1"
                      className="img-fluid"
                      width={800}
                      height={700}
                    />
                    <div className="overlay">
                      <div>
                        <h5>Meeting Room</h5>
                        <a href="#" className="btn btn-theme1">Inquire now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      src="/img/facility-1.jpg"
                      alt="Facility 1"
                      className="img-fluid"
                      width={800}
                      height={700}
                    />
                    <div className="overlay">
                      <div>
                        <h5>Meeting Room</h5>
                        <a href="#" className="btn btn-theme1">Inquire now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      src="/img/facility-1.jpg"
                      alt="Facility 1"
                      className="img-fluid"
                      width={800}
                      height={700}
                    />
                    <div className="overlay">
                      <div>
                        <h5>Meeting Room</h5>
                        <a href="#" className="btn btn-theme1">Inquire now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      src="/img/facility-1.jpg"
                      alt="Facility 1"
                      className="img-fluid"
                      width={800}
                      height={700}
                    />
                    <div className="overlay">
                      <div>
                        <h5>Meeting Room</h5>
                        <a href="#" className="btn btn-theme1">Inquire now</a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </section>

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

      <section className="what-they-say">
        <div className="container">
          <div className="intro-cont">
            <h2>What they Say</h2>
            {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p> */}
          </div>
          <div className="row wht-thy-say-row justify-content-start">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont">
                  <Image
                    src="/img/wht-thy-see-icon1.png"
                    alt="Insee cement"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-left">
                  <h5>“A premium business address in Colombo”</h5>
                  <p>
                    Excellent location, modern facilities, and a highly professional environment that enhances our business presence.
                  </p>
                  <p>
                    — Corporate Tenant, Financial Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wht-thy-say-row justify-content-end">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont order-md-last">
                  <Image
                    src="/img/wht-thy-see-icon2.png"
                    alt="Grant Thornto"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-right order-md-first">
                  <h5>“Smooth operations, great facility management”</h5>
                  <p>
                    Reliable infrastructure, strong security, and responsive management make daily operations seamless.
                  </p>
                  <p>
                    — Regional Manager, Multinational Company
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wht-thy-say-row justify-content-start">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont">
                  <Image
                    src="/img/wht-thy-see-icon1.png"
                    alt="Insee cement"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-left">
                  <h5>“A premium business address in Colombo”</h5>
                  <p>
                    Excellent location, modern facilities, and a highly professional environment that enhances our business presence.
                  </p>
                  <p>
                    — Corporate Tenant, Financial Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wht-thy-say-row justify-content-end">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont order-md-last">
                  <Image
                    src="/img/wht-thy-see-icon2.png"
                    alt="Grant Thornto"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-right order-md-first">
                  <h5>“Smooth operations, great facility management”</h5>
                  <p>
                    Reliable infrastructure, strong security, and responsive management make daily operations seamless.
                  </p>
                  <p>
                    — Regional Manager, Multinational Company
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wht-thy-say-row justify-content-start">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont">
                  <Image
                    src="/img/wht-thy-see-icon1.png"
                    alt="Insee cement"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-left">
                  <h5>“A premium business address in Colombo”</h5>
                  <p>
                    Excellent location, modern facilities, and a highly professional environment that enhances our business presence.
                  </p>
                  <p>
                    — Corporate Tenant, Financial Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wht-thy-say-row justify-content-end">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont order-md-last">
                  <Image
                    src="/img/wht-thy-see-icon2.png"
                    alt="Grant Thornto"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="info-cont info-cont-right order-md-first">
                  <h5>“Smooth operations, great facility management”</h5>
                  <p>
                    Reliable infrastructure, strong security, and responsive management make daily operations seamless.
                  </p>
                  <p>
                    — Regional Manager, Multinational Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}