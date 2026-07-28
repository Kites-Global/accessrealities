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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Contact</Link>
                            </li>
                            <li className="nav-item portal-link">
                                <Link className="nav-link" href="#">Tenant Portal</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}