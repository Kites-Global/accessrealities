
function Contact() {
    return (
        <>
            <section className="experiences-page-banner contact-page-banner">
                <div className="intro-itm">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <h6>Connect with Access Realties for office space enquiries, tenant support, facility information or
                            general assistance. Our team is here to help you find the right solution.</h6>
                    </div>
                </div>
            </section>

            <section className="form-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-itm">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-4"><label>Name</label></div>
                                        <div className="col-lg-8"><input type="text" /></div>
                                        <div className="col-lg-4"><label>Phone</label></div>
                                        <div className="col-lg-8"><input type="tel" /></div>
                                        <div className="col-lg-4"><label>Email Address</label></div>
                                        <div className="col-lg-8"><input type="email" /></div>
                                        <div className="col-lg-4"><label>Company/Organization</label></div>
                                        <div className="col-lg-8"><input type="text" /></div>
                                        <div className="col-lg-4"><label>Message</label></div>
                                        <div className="col-lg-8"><textarea rows={4}></textarea></div>
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8"><button type="submit" className="btn-theme1 btn">Submit</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-detail-cont">
                                <h3 className="sub-page-title">Contact us</h3>
                                <div className="contact-list">
                                    <a href="tel:+94774055682" className="contact-list-itm">
                                        <i className="bi bi-phone"></i>
                                        <p>+94 774 055 682</p>
                                    </a>
                                    <a href="tel:+94112302302" className="contact-list-itm">
                                        <i className="bi bi-telephone-outbound-fill"></i>
                                        <p>+94 112 302 302</p>
                                    </a>
                                    <a href="mailto:fm@accessrealties.com" className="contact-list-itm">
                                        <i className="bi bi-envelope"></i>
                                        <p>fm@accessrealties.com</p>
                                    </a>
                                    <a href="https://www.accessrealties.com" className="contact-list-itm">
                                        <i className="bi bi-globe"></i>
                                        <p>www.accessrealties.com</p>
                                    </a>
                                    <div className="contact-list-itm">
                                        <i className="bi bi-geo-alt"></i>
                                        <p>Access Realties (Pvt) Ltd, Access Towers, No.278/4, <br />
                                            Union Place, Colombo 02.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="location-sec">
                <div className="container">
                    <h2>Location Finder</h2>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11009.072403813067!2d79.85004280368794!3d6.918790003199182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259135875f2bd%3A0x6aa0c62080ff01fc!2sAccess%20Towers%2C%20No%20278%20Union%20Pl%2C%20Colombo!5e1!3m2!1sen!2slk!4v1785147751057!5m2!1sen!2slk" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </section>
        </>
    )
}

export default Contact