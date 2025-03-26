import React from "react";
import servicesCSS from "./Services.module.css";

import wifi from "../../images/wifi.png";
import breakfast from "../../images/breakfast.png";
import roomservice from "../../images/concierge.png";



function Services() {
    return (
        <div className={`${servicesCSS.services_container} section`}>
            <h1 className="section_heading">Our Offers</h1>
            <h2 className="section_title">Our Special <span>Offers</span></h2>


            <div className={servicesCSS.services_cards}>

                <div className={servicesCSS.service_card}>
                    <img src={wifi} alt="wifi" />
                    <h2>Free Wifi</h2>
                    <p>Stay connected with fast and
                        reliable internet throughout the hotel</p>
                </div>

                <div className={servicesCSS.service_card}>
                    <img src={breakfast} alt="breakfast" />
                    <h2>Breakfast</h2>
                    <p>Start your day with a delicious and energizing meal, on us.</p>
                </div>

                <div className={servicesCSS.service_card}>
                    <img src={roomservice} alt="room service" />
                    <h2>Room Service</h2>
                    <p>Enjoy convenient in-room dining, available at your request.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;