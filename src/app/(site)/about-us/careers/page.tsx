import Link from "next/link";
import { prisma } from "@/lib/admin/db";
import { submitApplication } from "@/lib/admin/actions/applications";

export const dynamic = "force-dynamic";

type SearchParams = { vacancy?: string; applied?: string };

export default async function Careers({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { vacancy, applied } = await searchParams;

    const vacancies = await prisma.vacancy.findMany({
        where: { isOpen: true },
        orderBy: { createdAt: "desc" },
    });

    // Only honor the preselect if it's actually one of the open vacancies.
    const selectedVacancyId = vacancies.some((v) => v.id === vacancy) ? vacancy : "";

    return (
        <>
            <section className="experiences-page-banner careers-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>Careers</h1>
                        <h6>Build your career with Access Realties, a fully owned subsidiary of Access Engineering PLC and
                            part of the wider Access Group. Join a prestigious corporate environment where your work
                            contributes to landmark commercial spaces, trusted property management and the continued
                            growth of one of Sri Lanka’s recognized business names.</h6>
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
                                    <form action={submitApplication}>
                                        <div className="row">
                                            <div className="col-lg-4"><label>Name</label></div>
                                            <div className="col-lg-8"><input name="name" type="text" required /></div>
                                            <div className="col-lg-4"><label>Phone Number</label></div>
                                            <div className="col-lg-8"><input name="phone" type="tel" required /></div>
                                            <div className="col-lg-4"><label>Email Address</label></div>
                                            <div className="col-lg-8"><input name="email" type="email" required /></div>
                                            <div className="col-lg-4"><label>Position applied for</label></div>
                                            <div className="col-lg-8">
                                                <select name="vacancyId" defaultValue={selectedVacancyId} required>
                                                    <option value="" disabled>
                                                        Select a position
                                                    </option>
                                                    {vacancies.map((v) => (
                                                        <option key={v.id} value={v.id}>
                                                            {v.title}
                                                            {v.location ? ` — ${v.location}` : ""}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8">
                                            <div className="file-upload">
                                                <input id="file-upload" name="cv" type="file" accept=".pdf,application/pdf" required />
                                                <label htmlFor="file-upload">Choose file</label>
                                            </div>
                                            <span className="file-upload-info">Please upload your CV in PDF format only.</span>
                                        </div>
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8"><button type="submit" className="btn-theme1 btn">Submit</button></div>
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-md-2">
                            <div className="vacancy-detail-cont">
                                <h3 className="sub-page-title">Available Vacancies</h3>
                                <div className="vacancy-list">
                                    {vacancies.length > 0 ? vacancies.map((v) => (
                                        <Link href={`/about-us/careers?vacancy=${v.id}#apply`} key={v.id} className="vacancy-itm">
                                            <p>{v.title}{v.location ? ` — ${v.location}` : ""}</p>
                                            <span>View</span>
                                        </Link>
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
