"use client"
import { useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import type ReCAPTCHA from "react-google-recaptcha"
import { submitApplication } from "@/lib/admin/actions/applications"
import { RecaptchaField } from "../../components/InquiryFormShared"

type Vacancy = { id: string; title: string; location: string | null };

function SubmitArea() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending && (
                <div className="alert alert-info mt-3" role="status">
                    Submitting your application, please wait…
                </div>
            )}
            <button type="submit" className="btn-theme1 btn" disabled={pending} aria-busy={pending}>
                {pending ? "Submitting..." : "Submit"}
            </button>
        </>
    );
}

export default function ApplicationForm({
    vacancies,
    selectedVacancyId,
}: {
    vacancies: Vacancy[];
    selectedVacancyId: string;
}) {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaError, setCaptchaError] = useState("");
    const [fileName, setFileName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const token = recaptchaRef.current?.getValue();
        if (!token) {
            e.preventDefault();
            setCaptchaError("Please complete the reCAPTCHA");
            return;
        }
        setCaptchaError("");
    };

    return (
        <form action={submitApplication} onSubmit={handleSubmit}>
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
                    <input
                        id="file-upload"
                        name="cv"
                        type="file"
                        accept=".pdf,application/pdf"
                        required
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    />
                    <label htmlFor="file-upload">{fileName || "Choose file"}</label>
                </div>
                {fileName && <span className="file-upload-info">Attached: {fileName}</span>}
                <span className="file-upload-info">Please upload your CV in PDF format only (max 5MB).</span>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
                <RecaptchaField recaptchaRef={recaptchaRef} />
                {captchaError && <div className="alert alert-danger mt-3">{captchaError}</div>}
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-8"><SubmitArea /></div>
        </form>
    );
}
