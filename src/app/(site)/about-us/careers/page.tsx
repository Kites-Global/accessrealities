import type { Metadata } from "next";
import { prisma } from "@/lib/admin/db";
import { mediaSrc } from "@/lib/admin/media";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = {
    title: "Careers | Access Realties",
    description: "Explore career opportunities at Access Realties and build your future within one of Colombo’s leading commercial property environments.",
};

export const dynamic = "force-dynamic";

type SearchParams = { applied?: string };

export default async function Careers({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { applied } = await searchParams;

    const vacancies = await prisma.vacancy.findMany({
        where: { isOpen: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <>
            <section className="experiences-page-banner careers-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>Careers</h1>
                        <h6>Build your career with Access Realties and be part of the Access Group, contributing to landmark commercial spaces and trusted property management.</h6>
                    </div>
                </div>
            </section>

            <section className="form-sec careers-form-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-md-1">
                            <div className="form-itm" id="apply">
                                {applied === "1" ? (
                                    <p className="text-success mb-0">
                                        Thanks for applying! We&apos;ve received your application and will be in touch.
                                    </p>
                                ) : vacancies.length === 0 ? (
                                    <p className="mb-0">
                                        There are no open positions to apply for right now. Please check back later.
                                    </p>
                                ) : (
                                    <ApplicationForm vacancies={vacancies} />
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-md-2">
                            <div className="vacancy-detail-cont">
                                <h3 className="sub-page-title">Available Vacancies</h3>
                                <div className="vacancy-list">
                                    {vacancies.length > 0 ? vacancies.map((v) => (
                                        <a
                                            href={mediaSrc(v.documentUrl) ?? v.documentUrl}
                                            key={v.id}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="vacancy-itm"
                                        >
                                            <p>{v.title}</p>
                                            <span>View</span>
                                        </a>
                                    )) : <p className="no-vacancy text-secondary mt-1">No vacancies available at the moment.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
