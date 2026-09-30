"use client"
import { useState } from "react";
import { Modal } from "react-bootstrap"
import Image from "next/image";

function ReviewModals() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<{ img: string; text: string; author: string }>({ img: "", text: "", author: "" });


    const handleClose = () => setShowModal(false);
    const handleOpen = ({ img, text, author }: { img: string; text: string; author: string }) => {
        setModalContent({ img, text, author });
        setShowModal(true);
    };
   
    return (

        <>
            <section className="what-they-say">
                <div className="container">
                    <div className="intro-cont">
                        <h2>What they Say</h2>
                    </div>

                    {/* Review 1 */}
                    <div className="row wht-thy-say-row justify-content-start">
                        <div className="col-md-6">
                            <div className="wht-thy-say-itm">
                                <div className="img-cont">
                                    <div className="logo-box">
                                        <Image src="/img/ob-4.png" alt="Insee cement" className="img-fluid" width={200} height={200} />
                                    </div>
                                </div>
                                <div className="info-cont info-cont-left">
                                    <h5>“CMS has been a tenant at Access Towers since 2012, and we have consistently enjoyed an excellent experience.”</h5>
                                    <p className="hide-mobile">
                                        The premises, security, cleanliness, safety, and building management have always met our expectations, supported by a courteous and responsive team.
                                    </p>
                                    <p>
                                        <button
                                            className="btn btn-link text-decoration-none text-danger p-0"
                                            onClick={() => handleOpen(
                                                {
                                                    img: "/img/ob-4.png",
                                                    text: "CMS has been a tenant at Access Towers since 2012, and we have consistently enjoyed an excellent experience. The premises, security, cleanliness, safety, and building management have always met our expectations, supported by a courteous and responsive team. The central location at Union Place is a significant advantage for both our staff and, particularly, our international clients visiting our offices. We are happy to recommend Access Towers to other organizations.",
                                                    author: "Roshan Jayalath - Director – CMS"
                                                }
                                            )}
                                        >
                                            read more
                                        </button><br />
                                        — Roshan Jayalath - Director – CMS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="row wht-thy-say-row justify-content-end">
                        <div className="col-md-6">
                            <div className="wht-thy-say-itm">
                                <div className="img-cont ">
                                    <div className="logo-box">
                                        <Image src="/img/st-1.png" alt="Grant Thornton" className="img-fluid" width={200} height={200} />
                                    </div>
                                </div>
                                <div className="info-cont info-cont-right info-cont-left order-md-first">
                                    <h5>“We are very pleased with the office we have rented on the 24th floor at Access Tower 2.”</h5>
                                    <p className="hide-mobile">
                                        The building is perfectly located in the city, with easy access to multiple restaurants and shops.
                                    </p>
                                    <p>
                                        <button
                                            className="btn btn-link text-decoration-none text-danger p-0"
                                            onClick={() => handleOpen(
                                                {
                                                    img: "/img/st-1.png",
                                                    text: "We are very pleased with the office we have rented on the 24th floor at Access Tower 2. The building is perfectly located in the city, with easy access to multiple restaurants and shops. The facility is well maintained and clean.Most importantly the administrative and maintenance staff are very flexible and accommodating with a service oriented approach. We wish you all the best.",
                                                    author: "Ruchi Gunawardene – Director – Brand Finance"
                                                }
                                            )}
                                        >
                                            read more
                                        </button><br />
                                        — Ruchi Gunawardene – Director – Brand Finance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="row wht-thy-say-row justify-content-start">
                        <div className="col-md-6">
                            <div className="wht-thy-say-itm">
                                <div className="img-cont">
                                    <div className="logo-box">
                                        <Image src="/img/t-1.jpg" alt="Insee cement" className="img-fluid" width={200} height={200} />
                                    </div>
                                </div>
                                <div className="info-cont info-cont-left">
                                    <h5>&ldquo;We are very pleased to secure a well-located office space at Access Towers
                                        <span className="inside-txt"> which has transformed our daily operations by boosting team productivity, reducing administrative burdens, and projecting a professional image.</span>
                                        &rdquo;</h5>
                                   
                                    <p>
                                        <br />
                                        — Ruwan Malawarage DGM - Human Resources & Administration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <Modal
                show={showModal}
                onHide={handleClose}
                size="lg"
                centered
                backdropClassName="custom-modal-backdrop"
                contentClassName="border-0 shadow-lg custom-modal-content"
            >
                <Modal.Body className="p-5 position-relative">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                        onClick={handleClose}
                        aria-label="Close"
                    ></button>

                    {/* Modal Layout */}
                    <div className="custom-display align-items-center mt-3">
                        {/* Logo Area */}
                        <div className="align-items-center logo-box custom-modal-logo-box fit-mobile">
                            <Image
                                src={modalContent.img}
                                alt="Logo"
                                width={90}
                                height={90}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        {/* Vertical Divider */}
                        <div className="mx-4 custom-modal-divider"></div>

                        {/* Text Content */}
                        <div>
                            <p className="mb-4 custom-modal-text text-white">
                                {modalContent.text}
                            </p>
                            <p className="mb-0 fw-bold custom-modal-author text-white">
                                - {modalContent.author}
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ReviewModals