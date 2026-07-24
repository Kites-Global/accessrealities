"use client";

import Image from "next/image";

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
                                    <a href="#">
                                        <h5>Home</h5>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <h5>Access Towers</h5>
                                    </a>
                                    <ul>
                                        <li><a href="#">North Tower</a></li>
                                        <li><a href="#">South Tower</a></li>
                                        <li><a href="#">Floor Plans</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Inquire Now</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <h5>Our Journey</h5>
                                    </a>
                                    <ul>
                                        <li><a href="#">Access Realties</a></li>
                                        <li><a href="#">Vision & Mission</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <h5>Media</h5>
                                    </a>
                                    <ul>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Events</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <h5>Contact</h5>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <h5>Tenant Portal</h5>
                                    </a>
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
                                    <a href="#"> +94 774 055 682 </a><br />
                                    <a href="#"> +94 112 302 302 </a>
                                </div>
                            </li>
                            <li><i className="bi bi-envelope-fill"></i><a href="#"> fme@accessrealities.com </a></li>
                        </ul>
                        <div className="socialies">
                            <a href="#"><i className="bi bi-youtube"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
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