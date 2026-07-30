"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Image
                            src="/img/logo.png"
                            alt="Logo"
                            className="img-fluid"
                            width={250}
                            height={108}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="quick-links">
                            <div className="row">
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Home</h5>
                                    </Link>
                                </div>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Access Towers</h5>
                                    </Link>
                                    <ul>
                                        <li><Link href="#">North Tower</Link></li>
                                        <li><Link href="#">South Tower</Link></li>
                                        <li><Link href="#">Floor Plans</Link></li>
                                        <li><Link href="#">Gallery</Link></li>
                                        <li><Link href="#">Inquire Now</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Our Journey</h5>
                                    </Link>
                                    <ul>
                                        <li><Link href="#">Access Realties</Link></li>
                                        <li><Link href="#">Vision & Mission</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Media</h5>
                                    </Link>
                                    <ul>
                                        <li><Link href="#">News</Link></li>
                                        <li><Link href="#">Events</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Contact</h5>
                                    </Link>
                                </div>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <h5>Tenant Portal</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <h6>Access Realties (Pvt) Ltd</h6>
                        <ul>
                            <li><i className="bi bi-buildings"></i> Access Towers, No.278/4, Union Place, Colombo 02.</li>
                            <li>
                                <i className="bi bi-telephone-fill"></i>
                                <div>
                                    <Link href="#"> +94 774 055 682 </Link><br />
                                    <Link href="#"> +94 112 302 302 </Link>
                                </div>
                            </li>
                            <li><i className="bi bi-envelope-fill"></i><Link href="#"> fme@accessrealities.com </Link></li>
                        </ul>
                        <div className="socialies">
                            <Link href="#"><i className="bi bi-youtube"></i></Link>
                            <Link href="#"><i className="bi bi-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        // <footer>
        //     <div className="container">
        //         <ul className="mobi-dd">
        //             <li>
        //                 <a href="/">Home</a>
        //             </li>
        //             <li>
        //                 <a href="/work">Work</a>
        //             </li>
        //             <li>
        //                 <a href="/about">About Me</a>
        //             </li>
        //             <li>
        //                 <a href="/contact">Contact</a>
        //             </li>
        //         </ul>
        //         <small>
        //             Copyright &copy; {new Date().getFullYear()} DCODE All rights reserved.
        //         </small>
        //     </div>
        // </footer>
    );
}