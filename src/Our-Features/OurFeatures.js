import React from "react";
import { ReactComponent as GYMImage } from "../images/SVG/dumbbell.svg";
import { ReactComponent as MapImage } from "../images/SVG/map.svg";
import { ReactComponent as PunchingBagImage } from "../images/SVG/punching-bag.svg";

const OurFeature = () => {
    return (
        <div className="container-fluid my-5" id="feature">
            <h1 className="  title-text text-center my-2"> OUR FEATURE'S</h1>

            <div className="row text-white d-flex flex-md-row flex-column align-items-center justify-content-center ">
                {/* Card 1 */}
                <div className="card1 m-2 pt-2 text-center " style={{ width: "18rem" }}>

                    <GYMImage style={{ width: "40%", height: "40%" }} />

                    <div className="card-body">
                        <h5 className="card-title fw-bold ">New Equipment's</h5>
                        <hr />

                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                    </div>
                </div>
                {/* Card 2 */}
                <div className="card1 m-2 pt-2 text-center" style={{ width: "18rem" }}>

                    <MapImage style={{ width: "40%", height: "40%" }} />

                    <div className="card-body">
                        <h5 className="card-title fw-bold text-center">Our Location's</h5>
                        <hr />

                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                    </div>
                </div>
                {/* Card 3 */}
                <div className="card1 m-2 pt-2 text-center" style={{ width: "18rem" }}>

                    <PunchingBagImage style={{ width: "40%", height: "40%" }} />

                    <div className="card-body">
                        <h5 className="card-title fw-bold  text-center">Our Trainer's</h5>
                        <hr />

                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default OurFeature;