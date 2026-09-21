"use client"
import { Modal } from "react-bootstrap"
import { useState } from "react"

export function OfficeInquiryForm() {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>

            {/* home page form */}
            <Modal className="modal" show={show} onHide={handleClose} tabIndex={-1}>
                <Modal.Dialog className="modal-form">
                    <Modal.Header className="modal-header" >
                        <h5 className="modal-title">OFFICE RENTAL
                            INQUIRY</h5>

                    </Modal.Header>
                    <Modal.Body >

                        <form action="">
                            <input type="text" name="business-name" placeholder="Name of your business*" required />
                            <input type="text" name="name" placeholder="Your name*" required />
                            <input type="tel" name="phone" placeholder="Your mobile number*" required />
                            <input type="text" name="nature-of-business" placeholder="Nature of your business*" required />
                            <input type="email" name="email" placeholder="Your email*" required />
                            <label htmlFor="size">Tell us how much retail space you are looking for (in sq.ft)</label>
                            <select name="size" id="size">
                                <option defaultChecked value="300-500">300-500 sqft</option>
                                <option value="200-300">200-300 sqft</option>
                                <option value="100-200">100-200 sqft</option>
                            </select>
                            <textarea name="requirements" id="" placeholder="Do you have specific requirements?" rows={6}></textarea>
                            <div className="checkbox">
                                <input type="checkbox" name="form-type" value="download-floor-plan" required />
                                <label htmlFor="form-type">Download the floor plan pdf</label>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </Modal.Body>

                </Modal.Dialog>
            </Modal>
            <button type="button" className="btn btn-theme1 text-uppercase" onClick={() => handleOpen()}>
                Inquire Now
            </button>
        </>
    )
}

export function FacilitiesInquiryForm() {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>

            <Modal className="modal" show={show} onHide={handleClose} tabIndex={-1}>
                <Modal.Dialog className="modal-form">
                    <Modal.Header className="modal-header" >
                        <h5 className="modal-title">FACILITIES & SERVICES
                            INQUIRY</h5>

                    </Modal.Header>
                    <Modal.Body >

                        <form action="">
                            <input type="text" name="name" placeholder="Your name*" required />
                            <input type="tel" name="phone" placeholder="Your mobile number*" required />

                            <label htmlFor="size">Nature of your requirement*</label>
                            <select name="nature" id="size">
                                <option defaultChecked value="office-space">Office Space</option>
                                <option value="200-300">200-300 sqft</option>
                                <option value="100-200">100-200 sqft</option>
                            </select>
                            <input type="email" name="email" placeholder="Your email*" required />
                            <textarea name="requirements" id="" placeholder="Do you have specific requirements?" rows={6}></textarea>

                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </Modal.Body>

                </Modal.Dialog>
            </Modal>
            <button type="button" className="btn btn-theme1 text-uppercase" onClick={() => handleOpen()}>
                Inquire Now
            </button>
        </>
    )
}

export function VideoPopup({ videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID" }: { videoUrl?: string }) {
    const [show, setShow] = useState(false);

    const handleOpen = (e: React.MouseEvent) => {
        e.preventDefault();
        setShow(true);
    };
    const handleClose = () => setShow(false);

    return (
        <>
            {/* The Play Button Trigger */}
            <a href="#" onClick={handleOpen}>
                <i className="bi bi-play-circle-fill"></i>
            </a>

            {/* The Video Modal */}
            <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="bg-transparent border-0">
                <Modal.Header className="border-0 pb-0 mb-2 justify-content-end">
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        aria-label="Close"
                        onClick={handleClose}
                    />
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                        {/* Conditionally render the iframe ONLY when the modal is open */}
                        {show && (

                            <iframe
                                src={videoUrl}
                                title="Video Player"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "8px" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

