import React from "react";
import imagePerson from "../images/Review1.jpg";
import { ReactComponent as StarImage } from "../images/SVG/Star.svg";

const Card = ({ name }) => {
    return (
        <>
            <div className="card align-items-center justify-content-start">
                <div className="ourReviewCardImage"></div>
                <div className="card-body text-center">
                    <div className="starSVG">
                        <StarImage style={{ width: "10%", height: "10%" }} />
                        <StarImage style={{ width: "10%", height: "10%" }} />
                        <StarImage style={{ width: "10%", height: "10%" }} />
                        <StarImage style={{ width: "10%", height: "10%" }} />
                        <StarImage style={{ width: "10%", height: "10%" }} />
                    </div>

                    <h5 className="card-title fw-bold pt-2">{name}</h5>
                    <hr />
                    <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                </div>
            </div>
        </>
    )
}


const OurReviews = () => {
    return (

        <div className="banner d-flex justify-content-center align-items-center container-fluid carousel slide text-white" style={{ height: "100%" }} id="text-banner" data-bs-ride="carousel">

            <div>
                <div className="carousel-inner ">
                    <div className="carousel-item active text-white">
                        <Card name="Sam" />
                    </div>
                    <div className="carousel-item text-white">
                        <Card name="Aditya" />
                    </div>
                    <div className="carousel-item text-white">
                        <Card name="Aditya" />
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#text-banner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#text-banner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>

    )
}

export default OurReviews;