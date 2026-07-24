import Image from "next/image";
import styles from "./page.module.css";
import EmblaCarousel from "./components/EmblaCarousel";

export default function Home() {
  return (
    <div>
      <section className="hero-sec">

        <div className="title-cont">
          <h6>Serviced Offices for Rent</h6>
          <h1>
            Private Workspaces in the
            Heart of Colombo
          </h1>
          <a href="#" className="btn-theme1 btn">Inquire Now</a>
        </div>

      </section>

      <section className="about-access-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7 info-cont">
              <div className="info-itm">
                <h2>Access Realties (Pvt) Ltd.</h2>
                <h6>Creating Vibrant and Energetic Work Environments</h6>
                <p>
                  Access Realties has been actively involved in the design and construction in one of Colombo's most impressive commercial buildings, hence adorning the busy metropolis’s cityscape with much urban splendor that’s contemporary, cutting-edge and downright captivating. Sincere dedication towards divulging nothing short of the very best, in conjunction to staying on par with today’s latest trends have been key attributes of Access Realties (Pvt) Ltd., while rising on top of the corporate ladder and reaching the ultimate benchmark in Sri Lanka's Commercial Building and Construction market sector!
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
            ACCESS Towers
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has beened.
                </p>
                <a href="#" className="btn">View gallery</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="milestornes-sec">
        <div className="container-fluid">
          <h2>Milestones</h2>
          <div className="row milestones-row">
            <div className="col-md-3">
              <h2>1998</h2>
              <p>
                Completed Access Tower I, a 12-storey commercial landmark spanning 120,000 sq. ft.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2008</h2>
              <p>
                Completed Access Tower I, a 12-storey commercial landmark spanning 120,000 sq. ft.
              </p>
            </div>
            <div className="col-md-3">
              <h2>1998</h2>
              <p>
                Completed Access Tower I, a 12-storey commercial landmark spanning 120,000 sq. ft.
              </p>
            </div>
            <div className="col-md-3">
              <h2>2008</h2>
              <p>
                Completed Access Tower I, a 12-storey commercial landmark spanning 120,000 sq. ft.
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
