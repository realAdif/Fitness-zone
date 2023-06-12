import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
const Footer = () => {
    return (


        <footer class="text-center text-lg-start bg-white text-muted">

            <section class="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
                {/* Title screen */}
                <div class="me-5  d-lg-block">
                    <span>READY FOR YOUR <span className="text-danger">NEXT</span> LESSON?</span>
                </div>
                {/* Svg icons */}
                <div>
                    <a href="#" class="me-4 link-secondary">
                        <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} />
                    </a>
                </div>

            </section>
            <section class="">
                <div class="container text-center text-md-start mt-2">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">

                            <h6 class="text-uppercase fw-bold mb-3">
                                links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Home</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Our Trainers</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Our Features</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Contact Us</a>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home  text-secondary"></i> New York, NY 10012, US</p>
                            <p>
                                <i class="fas fa-envelope text-secondary"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone text-secondary"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print text-secondary"></i> + 01 234 567 89</p>
                        </div>

                    </div>
                </div>
            </section>

            <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                © 2021 Copyright:
                <span> Aditya Gaikwad</span>
            </div>

        </footer>


    )
}

export default Footer;