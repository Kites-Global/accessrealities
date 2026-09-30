
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./(site)/globals.css";
import Navbar from "./(site)/components/Navbar";
import Footer from "./(site)/components/Footer";
import BootstrapClient from "./(site)/components/BootstrapClient";


export const metadata = {
    title: "404 - Page Not Found | Access Realities",
    description: "The page you are looking for could not be found.",
};

export default function NotFound() {
    return (
        <>
            <BootstrapClient />
            <Navbar />
            <div className="nf-page">
                <div className="container">
                    <main className="nf-content">
                        <Image src={"/img/logo-red.png"} alt="Access Realities" width={500} height={500} className="img-fluid access-logo"></Image>
                        <div className="nf-code">404</div>
                        <h1 className="nf-title">Page Not Found</h1>
                        <p className="nf-desc">
                            The page you are looking for might have been moved, renamed, or is temporarily
                            unavailable.
                        </p>

                        <div>
                            <Link href="/" className="btn btn-theme1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                >
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg>
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>

    );
}