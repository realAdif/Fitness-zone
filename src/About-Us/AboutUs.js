import React from "react";
import Image from "../images/girl-boxing.jpg";
const AboutUs = () => {
    return (
        <div className="main-about-us my-5 text-white" id="about-us">


            <div className="container-fluid d-flex flex-column" id="about-us">
                <h1 className="text-center display-1 my-2 fw-bold text-danger ">ABOUT US</h1>
                <div className="container">
                    <div className="row d-flex  justify-content-center flex-md-row flex-column">
                        <div className="col-md-6 d-flex justify-content-end ">
                            <img className="img-fluid about-us-image" src={Image}>
                            </img>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center  ">
                            <h1 className="fw-bold display-6 small-text">HOW WE GOT STARTED IN THIS BUSINESS</h1>
                            <p className="text">
                                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin ullamcorper gravida sem sit amet cursus. ugiat maximus.
                            </p>
                            <p className="text">
                                Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                            </p>
                            <div className="col">
                                <button className="btn btn-danger px-5">See All</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;