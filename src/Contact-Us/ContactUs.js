import React from "react";
import OurReviews from "../Our-Reviews/OurReviews";

const ContactUs = () => {
    return (
        <div className="container-fluid my-5" id="contact-us">
            <h1 className="  title-text text-center my-2"> CONTACT US</h1>

            <div className="container">

                <div className="row d-flex  justify-content-center flex-md-row flex-column my-4">

                    <div className="col-md-4 d-flex justify-content-end my-4" >
                        {/* left */}
                        <form style={{ width: "100%" }} >
                            <div className="mb-3 text-white">
                                <label className="form-label">Name</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3 text-white">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3 text-white">
                                <label className="form-label">Message</label>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                                </div>
                            </div>

                            <button type="submit" className="btn btn-danger px-4">Send Message</button>
                        </form>

                    </div>

                    <div className="col-md-4 d-flex flex-column justify-content-end   my-4">
                        {/* Right */}
                        <OurReviews />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;