"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import EmblaCarousel from "./components/EmblaCarousel";
import { Modal } from "react-bootstrap"
import Aminities from './components/Aminities';
import { OfficeInquiryForm, VideoPopup } from "./components/PopupForms";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ img: string; text: string; author: string }>({ img: "", text: "", author: "" });

  const handleOpen = ({ img, text, author }: { img: string; text: string; author: string }) => {
    setModalContent({ img, text, author });
    setShowModal(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShowModal(false);

  const [activeReview, setActiveReview] = useState(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };
  // Dragging Logic
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !scrollRef.current || !trackRef.current) return;

      const deltaX = e.clientX - startX;
      const trackWidth = trackRef.current.clientWidth;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      // Calculate how much the container should scroll based on mouse movement
      const scrollDelta = (deltaX / trackWidth) * maxScroll;
      scrollRef.current.scrollLeft = startScrollLeft + scrollDelta;
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, startX, startScrollLeft]);

  return (
    <div>
      <section className="hero-sec">

        <div className="title-cont">
          {/* <h6>Serviced Offices for Rent</h6> */}
          {/* <h1>
            Private Workspaces in the
            Heart of Colombo
          </h1> */}
          <h1>Private Workspaces in the
            Heart of Colombo</h1>
          {/* <a href="#" className="btn-theme1 btn">Inquire Now</a> */}
          <OfficeInquiryForm />
        </div>

      </section>

      <section className="about-access-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7 info-cont">
              <div className="info-itm">
                <h2>Defining Colombo’s Corporate Skyline</h2>
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
                  src="/img/about-access-sec-fimg.webp"
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
          <VideoPopup videoUrl="https://www.youtube.com/embed/YOUR_REAL_VIDEO_LINK_HERE?autoplay=1" />
        </div>
      </section>

      <section className="south-north-tower-sec">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className="south-cont">
                <Image
                  src="/img/home-south-tower.jpg"
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
                <a href="/access-towers/south-tower" className="btn">View tower</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="north-cont">
                <Image
                  src="/img/home-north-tower.jpg"
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
                <a href="/access-towers/north-tower" className="btn">View tower</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="milestornes-sec px-2">
        <div className="container">
          <h2 className="text-white text-uppercase">Milestones</h2>

          {/* COMBINED INTO A SINGLE DIV */}
          <div
            className="milestones-row hide-native-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
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

          {/* UPDATED TRACK AND THUMB WITH DRAG LOGIC */}
          <div className="custom-scrollbar-track" ref={trackRef}>
            <div
              className={`custom-scrollbar-thumb ${isDragging ? "dragging" : ""}`}
              style={{ left: `${scrollProgress}%` }}
              onPointerDown={(e) => {
                e.preventDefault();
                setIsDragging(true);
                setStartX(e.clientX);
                if (scrollRef.current) {
                  setStartScrollLeft(scrollRef.current.scrollLeft);
                }
              }}
            >
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-sec">
        <div className="container">
          <div className="intro-cont">
            <h2>Facilities</h2>
            <p>
              Whatever your business needs, our modern facilities are designed to provide the right space, setting and
              support for every occasion.
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

      <Aminities />

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

      <section className="what-they-say">
        <div className="container">
          <div className="intro-cont">
            <h2>What they Say</h2>
          </div>

          {/* Review 1 */}
          <div className="row wht-thy-say-row justify-content-start">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont">
                  <div className="logo-box">
                    <Image src="/img/ob-4.png" alt="Insee cement" className="img-fluid" width={200} height={200} />
                  </div>
                </div>
                <div className="info-cont info-cont-left">
                  <h5>“CMS has been a tenant at Access Towers since 2012, and we have consistently enjoyed an excellent experience.”</h5>
                  <p className="hide-mobile">
                    The premises, security, cleanliness, safety, and building management have always met our expectations, supported by a courteous and responsive team.
                  </p>
                  <p>
                    <button
                      className="btn btn-link text-decoration-none text-danger p-0"
                      onClick={() => handleOpen(
                        {
                          img: "/img/ob-4.png",
                          text: "CMS has been a tenant at Access Towers since 2012, and we have consistently enjoyed an excellent experience. The premises, security, cleanliness, safety, and building management have always met our expectations, supported by a courteous and responsive team. The central location at Union Place is a significant advantage for both our staff and, particularly, our international clients visiting our offices. We are happy to recommend Access Towers to other organizations.",
                          author: "Roshan Jayalath - Director – CMS"
                        }
                      )}
                    >
                      read more
                    </button><br />
                    — Roshan Jayalath - Director – CMS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="row wht-thy-say-row justify-content-end">
            <div className="col-md-6">
              <div className="wht-thy-say-itm">
                <div className="img-cont order-md-last">
                  <div className="logo-box">
                    <Image src="/img/st-1.png" alt="Grant Thornton" className="img-fluid" width={200} height={200} />
                  </div>
                </div>
                <div className="info-cont info-cont-right info-cont-left order-md-first">
                  <h5>“We are very pleased with the office we have rented on the 24th floor at Access Tower 2.”</h5>
                  <p className="hide-mobile">
                    The building is perfectly located in the city, with easy access to multiple restaurants and shops.
                  </p>
                  <p>
                    <button
                      className="btn btn-link text-decoration-none text-danger p-0"
                      onClick={() => handleOpen(
                        {
                          img: "/img/st-1.png",
                          text: "We are very pleased with the office we have rented on the 24th floor at Access Tower 2. The building is perfectly located in the city, with easy access to multiple restaurants and shops. The facility is well maintained and clean.Most importantly the administrative and maintenance staff are very flexible and accommodating with a service oriented approach. We wish you all the best.",
                          author: "Ruchi Gunawardene – Director – Brand Finance"
                        }
                      )}
                    >
                      read more
                    </button><br />
                    — Ruchi Gunawardene – Director – Brand Finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 3. React Bootstrap Modal */}
      < Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        backdropClassName="custom-modal-backdrop"
        contentClassName="border-0 shadow-lg custom-modal-content"
      >
        <Modal.Body className="p-5 position-relative">
          {/* Close Button */}
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            onClick={handleClose}
            aria-label="Close"
          ></button>

          {/* Modal Layout */}
          <div className="custom-display align-items-center mt-3">
            {/* Logo Area */}
            <div className="align-items-center logo-box custom-modal-logo-box fit-mobile">
              <Image
                src={modalContent.img}
                alt="Logo"
                width={90}
                height={90}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Vertical Divider */}
            <div className="mx-4 custom-modal-divider"></div>

            {/* Text Content */}
            <div>
              <p className="mb-4 custom-modal-text">
                {modalContent.text}
              </p>
              <p className="mb-0 fw-bold custom-modal-author">
                - {modalContent.author}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal >

    </div >
  );
}