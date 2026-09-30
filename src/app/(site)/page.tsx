import Image from "next/image";
import EmblaCarousel from "./components/EmblaCarousel";
import Aminities from './components/Aminities';
import { OfficeInquiryForm, VideoPopup } from "./components/PopupForms";
import Milestones from "./components/Milestones";
import ReviewModals from "./components/ReviewModals";
import { Metadata } from "next";


export const metaData: Metadata = {
  title: "Home | Access Realties",
  description: "Discover Access Realties, creating premium commercial office spaces and modern business environments in the heart of Colombo."
}



export default function Home() {


  return (
    <div>
      <section className="hero-sec">

        <div className="title-cont">
          <h1>Private Workspaces in the
            Heart of Colombo</h1>
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
                <p className="text-black mt-3">
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
          <VideoPopup videoUrl="https://www.youtube.com/embed/-WmSyoYEJfs?si=eRs9DhYgizv0B9nE" />
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


      <Milestones />



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

              </div>
            </div>
          </div>

        </div>
      </section>

      <Aminities />

      <ReviewModals />


    </div>
  );
}