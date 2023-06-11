import React from "react";
import JakeImage from "../images/Jake.jpg";
import Name from "../images/Jessica.jpg";
import SarahImage from "../images/Sarah.jpg";
const OurTrainers = () => {
    return (
        <div className="container-fluid my-5" id="trainers">
            <h1 className="  title-text text-center my-2"> OUR TRAINER'S</h1>

            <div className="row text-white d-flex flex-md-row flex-column align-items-center justify-content-center ">

                <div className="card m-2 pt-2" style={{ width: "18rem" }}>
                    <img src={JakeImage} className="card-img-top rounded" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Jake Smith</h5>
                        <hr />

                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        <a href="#" className="btn btn-danger px-4">More Info</a>
                    </div>
                </div>


                <div className="card m-2 pt-2" style={{ width: "18rem" }}>
                    <img src={SarahImage} className="card-img-top rounded" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Sarah Wilson</h5>
                        <hr />
                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        <a href="#" className="btn btn-danger  px-4">More Info</a>
                    </div>
                </div>


                <div className="card m-2 pt-2" style={{ width: "18rem" }}>
                    <img src={Name} className="card-img-top rounded" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Jessica Miles</h5>
                        <hr />
                        <p className="card-text text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        <a href="#" className="btn btn-danger  px-4">More Info</a>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default OurTrainers;