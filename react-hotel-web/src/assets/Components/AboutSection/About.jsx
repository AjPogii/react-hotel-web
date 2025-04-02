import React from "react";
import aboutCSS from './About.module.css';

import aboutImg from './../../images/hero1.jpg';


function About() {
    return (
        <div className={`${aboutCSS.about_container} section`}>

            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>

            <div className={aboutCSS.about_content}>
                <h1 className="section_heading">About Us</h1>
                <h2 className="section_title">Escape to <span>Tranquility, </span> Embraced by <span>Nature and Elegance.</span> </h2>

                <div className={aboutCSS.about_content_paragraph}>
                    <small>Hotel Inigo strive to create a pleasant and welcoming atmosphere.
                        It’s our goal to make our clients feel at ease, greeting them with professionalism and attention for their every need.
                        High-speed Internet is available throughout our hotel.</small>
                </div>
            </div>


        </div>
    )
}
export default About;