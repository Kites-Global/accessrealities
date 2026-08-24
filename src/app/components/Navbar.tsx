"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();

    useEffect(() => {
        const navbarMenu = document.getElementById("navbarSupportedContent");
        const navbarToggler = document.querySelector(".navbar-toggler") as HTMLElement;

        if (navbarMenu?.classList.contains("show") && navbarToggler) {
            navbarToggler.click();
        }
    }, [pathname]);

    const isActive = (path: string) =>
        pathname === path || pathname.startsWith(path + "/");

    const isAccessTowersActive = isActive("/access-towers");
    const isAboutUsActive = isActive("/about-us");


    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="/img/logo.png" alt="" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${isAccessTowersActive ? "active" : ""}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Access Towers
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link href="/access-towers/north-tower" className="dropdown-item">North Tower</Link>
                                    </li>
                                    <li>
                                        <Link href="/access-towers/south-tower" className="dropdown-item">South Tower</Link>
                                    </li>
                                    <li>
                                        <Link href="/access-towers/experiences" className="dropdown-item">Experiences</Link>
                                    </li>
                                    <li>
                                        <Link href="/access-towers/facilities" className="dropdown-item">Facilities</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${isAboutUsActive ? "active" : ""}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Journey
                                </Link>
                                <ul className="dropdown-menu">

                                    <li><Link className="dropdown-item" href="/about-us/our-journey">Access Realties</Link></li>
                                    <li><Link className="dropdown-item" href="/about-us/careers">Careers</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === "/news-and-events" ? "active" : ""}`} href="/news-and-events">
                                    News & Events
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item c-tenet-portal">
                                <Link className={`nav-link portal-link ${pathname === "/tenant-portal" ? "active" : ""}`} href="https://access-realties-access.odoo.com/web/login" target="_blank">Tenant Portal</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}