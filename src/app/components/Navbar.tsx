"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path || pathname.startsWith(path + "/");

    const isAccessTowersActive = isActive("/access-towers/north-tower") || isActive("/access-towers/south-tower");

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/img/logo.png" alt="" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle ${isAccessTowersActive ? "active" : ""}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Access Towers
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/access-towers/north-tower" className="dropdown-item">North Tower</a>
                                    </li>
                                    <li>
                                        <a href="/access-towers/south-tower" className="dropdown-item">South Tower</a>
                                    </li>
                                    <li>
                                        <a href="/access-towers/experiences" className="dropdown-item">Experiences</a>
                                    </li>
                                    <li>
                                        <a href="/access-towers/facilities" className="dropdown-item">Facilities</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/about-us/our-journey">Our Journey</a></li>
                                    <li><a className="dropdown-item" href="#">Careers</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item portal-link">
                                <a className="nav-link" href="#">Tenant Portal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}