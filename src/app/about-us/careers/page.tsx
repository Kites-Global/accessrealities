import Link from "next/link"

function Careers() {


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
                        <div className="col-lg-6">
                            <div className="form-itm">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-4"><label>Name</label></div>
                                        <div className="col-lg-8"><input type="text" /></div>
                                        <div className="col-lg-4"><label>Phone Number</label></div>
                                        <div className="col-lg-8"><input type="tel" /></div>
                                        <div className="col-lg-4"><label>Email Address</label></div>
                                        <div className="col-lg-8"><input type="email" /></div>
                                        <div className="col-lg-4"><label>Position applied for</label></div>
                                        <div className="col-lg-8">
                                            <select>
                                                <option>Position 1</option>
                                                <option>Position 2</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8">
                                            <div className="file-upload">
                                                <input id="file-upload" type="file" accept=".pdf" />
                                                <label>Choose file</label>
                                            </div>
                                            <span className="file-upload-info">Please upload your CV in PDF format only.</span>
                                        </div>
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8"><button type="submit" className="btn-theme1 btn">Submit</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vacancy-detail-cont">
                                <h3>Available Vacancies</h3>
                                <div className="vacancy-list">
                                    <Link href="#" className="vacancy-itm">
                                        <p>Marketing Executive</p>
                                        <span>View</span>
                                    </Link>
                                    <Link href="#" className="vacancy-itm">
                                        <p>Marketing Executive</p>
                                        <span>View</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Careers