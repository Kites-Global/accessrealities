"use client"
import { useRef, useState } from "react"
import type ReCAPTCHA from "react-google-recaptcha"
import { InquiryStatusMessage, RecaptchaField, submitInquiry, type InquiryStatus } from "../components/InquiryFormShared"

export default function ContactForm() {
    const [status, setStatus] = useState<InquiryStatus>("idle");
    const [error, setError] = useState("");
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = recaptchaRef.current?.getValue();
        if (!token) {
            setStatus("error");
            setError("Please complete the reCAPTCHA");
            return;
        }

        const form = new FormData(e.currentTarget);
        setStatus("submitting");
        setError("");

        const result = await submitInquiry({
            type: "contact",
            name: form.get("name"),
            phone: form.get("phone"),
            email: form.get("email"),
            company: form.get("company"),
            message: form.get("message"),
            recaptchaToken: token,
        });

        recaptchaRef.current?.reset();
        if (result.ok) {
            setStatus("success");
            e.currentTarget.reset();
        } else {
            setStatus("error");
            setError(result.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-4"><label>Name</label></div>
                <div className="col-lg-8"><input type="text" name="name" required /></div>
                <div className="col-lg-4"><label>Phone</label></div>
                <div className="col-lg-8"><input type="tel" name="phone" required /></div>
                <div className="col-lg-4"><label>Email Address</label></div>
                <div className="col-lg-8"><input type="email" name="email" required /></div>
                <div className="col-lg-4"><label>Company/Organization</label></div>
                <div className="col-lg-8"><input type="text" name="company" /></div>
                <div className="col-lg-4"><label>Message</label></div>
                <div className="col-lg-8"><textarea name="message" rows={4} required></textarea></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <RecaptchaField recaptchaRef={recaptchaRef} />
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-8"><InquiryStatusMessage status={status} error={error} /></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <button type="submit" className="btn-theme1 btn" disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
}
