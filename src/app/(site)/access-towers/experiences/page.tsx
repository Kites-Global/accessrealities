import ExperienceGallery from "../../components/ExperienceGallery";
import { FacilitiesInquiryForm } from "../../components/PopupForms";

interface Experience {
    title: string;
    description: string;
    images: { src: string; alt: string }[];
    call?: string;
    email?: string;
    enquiryLabel?: string;
    actionVerb?: string;
}

const experiencesData: Experience[] = [
    {
        title: "Members’ Lounge at Access Tower II",
        description:
            "Located on the 29th floor of Access Tower II, the Members’ Lounge offers an exclusive business lounge in Colombo for professionals who value privacy, comfort and distinction. Operated in partnership with Elevate by Jetwing, it features plush seating, private dining rooms, tailored service and premium lifestyle amenities, creating a refined setting for business networking, corporate entertaining and relaxed moments above the city.",
        images: [
            { src: "/img/experiences-lounge-1.jpg", alt: "Members Lounge" },
            { src: "/img/experiences-lounge-2.jpg", alt: "Members Lounge" },
            { src: "/img/experiences-lounge-3.jpg", alt: "Members Lounge" },
            { src: "/img/experiences-lounge-4.jpg", alt: "Members Lounge" },
        ],
        call: "+94 70 627 5517",
        email: "fnb.virticle@jetwinghotels.com",
        enquiryLabel: "To discover membership privileges and exclusive inclusions,",
        actionVerb: "contact",
    },
    {
        title: "Grind",
        description:
            "Grind at Access Towers brings café culture into the rhythm of Colombo’s corporate day. Created for quick coffee runs, relaxed brunches, informal meetings and well-earned breaks, this specialty coffee bar and eatery offers a curated mix of quality coffee, fresh food and social energy within a modern business setting. From morning catch-ups to after-meeting conversations, Grind gives tenants, visitors and café-goers a stylish place to pause, recharge and connect in the heart of Colombo 02.",
        images: [
            { src: "/img/experiences-grind-1.jpg", alt: "Grind" },
            { src: "/img/experiences-grind-2.jpg", alt: "Grind" },
            { src: "/img/experiences-grind-3.jpg", alt: "Grind" },
            { src: "/img/experiences-grind-4.jpg", alt: "Grind" },
        ],
    },
    {
        title: "Virticle by Jetwing",
        description:
            "Set high above the city at Access Tower II, Virticle by Jetwing brings a refined rooftop restaurant and bar experience to the heart of Colombo 02. Designed for elevated dining, sunset drinks, corporate gatherings and memorable nights out, Virticle combines curated cuisine, crafted beverages and a sophisticated atmosphere with sweeping views across Colombo’s cityscape. As one of the city’s standout rooftop venues, it adds a distinctive lifestyle and hospitality experience to Access Towers for tenants, visitors and guests seeking premium dining in Colombo.",
        images: [
            { src: "/img/experiences-virticle-1.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-2.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-3.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-4.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-5.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-6.jpg", alt: "Virticle by Jetwing" },
            { src: "/img/experiences-virticle-7.jpg", alt: "Virticle by Jetwing" },
        ],
        call: "+94 70 735 5355",
        email: "fnb@virticlebyjetwing.com",
        enquiryLabel: "For reservations and enquiries,",
        actionVerb: "call",
    },
    {
        title: "KFC",
        description:
            "KFC at Access Towers adds everyday convenience to the Colombo 02 business experience, offering a familiar quick-service restaurant for lunch breaks, casual meals, takeaway orders and quick bites between meetings. With its well-known menu, central location and easy accessibility within the Access Towers environment, KFC supports the needs of busy professionals, visitors and corporate tenants looking for fast, convenient dining in Colombo.",
        images: [
            { src: "/img/experiences-kfc-1.jpg", alt: "KFC" },
            { src: "/img/experiences-kfc-2.jpg", alt: "KFC" },
            { src: "/img/experiences-kfc-3.jpg", alt: "KFC" },
        ],
    },
    {
        title: "P&S",
        description:
            "P&S at Access Towers brings one of Sri Lanka’s most familiar food brands into the daily rhythm of Colombo’s corporate community. From quick breakfasts and teatime snacks to lunch, takeaway meals and casual bites between meetings, the outlet offers tenants, visitors and professionals a convenient dining option within the Access Towers environment. Backed by Perera & Sons’ long-standing legacy since 1902, it adds comfort, familiarity and everyday value to the workplace experience.",
        images: [
            { src: "/img/experiences-pns-1.jpg", alt: "PNS" },
            { src: "/img/experiences-pns-2.jpg", alt: "PNS" },
            { src: "/img/experiences-pns-3.jpg", alt: "PNS" },
        ],
    },
    {
        title: "BOC",
        description:
            "The Bank of Ceylon outlet adds practical value to the daily workplace experience, offering tenants, visitors and professionals’ easy access to trusted banking services during business hours. Its presence within the premises supports everyday financial needs with convenience, reliability and the assurance of one of Sri Lanka’s leading banking institutions.",
        images: [
            { src: "/img/experiences-boc-1.jpg", alt: "BOC" },
            { src: "/img/experiences-boc-2.jpg", alt: "BOC" },
        ],
    },
];

export default function experiences() {
    return (
        <>
            <section className="experiences-page-banner">
                <div className="intro-itm">
                    <h1>Experiences</h1>
                    <h6>Everything you need, within one connected business address.</h6>
                    {/* <a href="/contact" className="btn-theme1 btn">Inquire Now</a> */}
                    <FacilitiesInquiryForm />
                </div>
            </section>

            <section className="experience-sec">
                <div className="container">
                    {experiencesData.map((experience) => {
                        const call = experience.call;
                        const email = experience.email;
                        const actionVerb = experience.actionVerb || "Call";

                        return (
                            <div className="row experience-itm" key={experience.title}>
                                <div className="col-md-5 experience-img-gal-cont">
                                    <ExperienceGallery images={experience.images} />
                                </div>
                                <div className="col-md-7 experience-info-cont">
                                    <div>
                                        <h2>{experience.title}</h2>
                                        <p>{experience.description}</p>
                                        {call || email ? (
                                            <p>
                                                {experience.enquiryLabel ? experience.enquiryLabel : "For enquiries:"}{" "}
                                                {call && email ? (
                                                    <>
                                                        {actionVerb} <a href={`tel:${call.replace(/\s+/g, "")}`}>{call}</a> or email{" "}
                                                        <a href={`mailto:${email}`}>{email}</a>
                                                    </>
                                                ) : call ? (
                                                    <>
                                                        {actionVerb} <a href={`tel:${call.replace(/\s+/g, "")}`}>{call}</a>
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