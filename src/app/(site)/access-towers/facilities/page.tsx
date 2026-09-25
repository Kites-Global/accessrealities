import ExperienceGallery from "../../components/ExperienceGallery";
import { FacilitiesInquiryForm } from "../../components/PopupForms";

interface Facility {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  call?: string;
  email?: string;
  enquiryLabel?: string;
}

const facilitiesData: Facility[] = [
  {
    title: "Meeting Rooms",
    description:
      "Designed for moments that need focus, privacy and professionalism, the meeting room at Access Towers offers a polished setting for client meetings, presentations, interviews and business discussions. Located within a recognized commercial address in Colombo, it provides a convenient and reliable space for teams and professionals to meet with confidence.",
    images: [
      { src: "/img/facility-meet-room-1.jpg", alt: "Members Lounge" },
      { src: "/img/facility-meet-room-2.jpg", alt: "Members Lounge" },
      { src: "/img/facility-meet-room-3.jpg", alt: "Members Lounge" },
      { src: "/img/facility-meet-room-4.jpg", alt: "Members Lounge" },
      { src: "/img/facility-meet-room-5.jpg", alt: "Members Lounge" },
      { src: "/img/facility-meet-room-6.jpg", alt: "Members Lounge" },
    ],
    call: "+94 774 055 682",
    email: "fme@accessrealties.com",
  },
  {
    title: "Engagement Zones",
    description:
      "Located within the North Tower, the Engagement Zones offer vendors and brands a practical open space to connect with a professional corporate audience. Ideal for pop-up stores, product promotions, sampling campaigns, brand activations and seasonal sales, these spaces create valuable visibility within a recognized commercial environment in Colombo.",
    images: [
      { src: "/img/facility-engagement-1.jpg", alt: "Engagement Zones" },
      { src: "/img/facility-engagement-2.jpg", alt: "Engagement Zones" },
      { src: "/img/facility-engagement-3.jpg", alt: "Engagement Zones" },
      { src: "/img/facility-engagement-4.jpg", alt: "Engagement Zones" },
      { src: "/img/facility-engagement-5.jpg", alt: "Engagement Zones" },
    ],
    call: "+94 774 055 682",
    email: "fme@accessrealties.com",
  },
  {
    title: "Elevate Gym",
    description:
      "Elevate Gym offers a refined fitness experience within Access Tower II, designed for professionals, tenants and wellness-focused individuals who value convenience, performance and balance. Operated and managed by ARL Elevate, the gym forms part of the tower’s premium lifestyle offering, giving members a dedicated space to train, recharge and maintain an active routine within Colombo’s modern corporate environment.",
    images: [
      { src: "/img/facility-gym-1.jpg", alt: "Elevate GYM" },
      { src: "/img/facility-gym-2.jpg", alt: "Elevate GYM" },
      { src: "/img/facility-gym-3.jpg", alt: "Elevate GYM" },
      { src: "/img/facility-gym-4.jpg", alt: "Elevate GYM" },
      { src: "/img/facility-gym-5.jpg", alt: "Elevate GYM" },
      { src: "/img/facility-gym-6.jpg", alt: "Elevate GYM" },
    ],
    call: "+94 77 505 2342",
    enquiryLabel: "For membership enquiries:",
  },
  {
    title: "Zen Garden",
    description:
      "The Zen Garden offers a refreshing breakaway space for tenants, professionals and visitors to pause, reset and reconnect within a modern corporate environment. Designed to bring a sense of calm to the busy business day, it adds a valuable lifestyle amenity to Access Towers, supporting workplace wellbeing, informal conversations and moments of quiet reflection in the heart of Colombo 02.",
    images: [
      { src: "/img/facility-garden-1.jpg", alt: "Zen Garden" },
      { src: "/img/facility-garden-2.jpg", alt: "Zen Garden" },
      { src: "/img/facility-garden-3.jpg", alt: "Zen Garden" },
      { src: "/img/facility-garden-4.jpg", alt: "Zen Garden" },
    ],
  },
  {
    title: "Car Parking",
    description:
      "Access Towers offers practical car parking facilities that add ease and efficiency to the daily business experience in Colombo 02. Supported by dedicated parking levels within Access Tower II and parking capacity for approximately 300 vehicles, the facility is designed to serve tenants, visitors and corporate guests with greater convenience. Positioned within one of Colombo’s recognized commercial office destinations, it helps make arrivals smoother, meetings easier and the workday seamless.",
    images: [
      { src: "/img/facility-car-1.jpg", alt: "Car Parking" },
      { src: "/img/facility-car-2.jpg", alt: "Car Parking" },
      { src: "/img/facility-car-3.jpg", alt: "Car Parking" },
    ],
    call: "+94 774 055 682",
    email: "fme@accessrealties.com",
  },
  {
    title: "Advertising",
    description:
      "Access Towers offers digital advertising options through TV screens placed across the premises, helping tenants, brands and business partners reach a premium corporate audience. Ideal for promotions, announcements, launches and business services, these digital screen placements provide targeted visibility within a recognised commercial office environment in Colombo.",
    images: [
      { src: "/img/facility-advertising-1.jpg", alt: "Advertising" },
      { src: "/img/facility-advertising-2.jpg", alt: "Advertising" },
      { src: "/img/facility-advertising-3.jpg", alt: "Advertising" },
    ],
    call: "+94 774 055 682",
    email: "fme@accessrealties.com",
  },
];

export default function facilities() {
  return (
    <>
      <section className="facilities-page-banner">
        <div className="intro-itm">
          <h1>Facilities</h1>
          <h6>Everything you need, within one connected business address.</h6>
          {/* <a href="/contact" className="btn-theme1 btn">Inquire Now</a> */}
          <FacilitiesInquiryForm />
        </div>
      </section>

      <section className="experience-sec">
        <div className="container">
          {facilitiesData.map((facility) => {
            const call = facility.call;
            const email = facility.email;

            return (
              <div className="row experience-itm" key={facility.title}>
                <div className="col-md-5 experience-img-gal-cont">
                  <ExperienceGallery images={facility.images} />
                </div>
                <div className="col-md-7 experience-info-cont">
                  <div>
                    <h2>{facility.title}</h2>
                    <p>{facility.description}</p>
                    {call || email ? (
                      <p>
                        {facility.enquiryLabel ? facility.enquiryLabel : "For enquiries:"}{" "}
                        {call && email ? (
                          <>
                            Call <a href={`tel:${call.replace(/\s+/g, "")}`}>{call}</a> or email{" "}
                            <a href={`mailto:${email}`}>{email}</a>
                          </>
                        ) : call ? (
                          <>
                            Call <a href={`tel:${call.replace(/\s+/g, "")}`}>{call}</a>
                          </>
                        ) : (
                          <>
                            Email <a href={`mailto:${email}`}>{email}</a>
                          </>
                        )}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
