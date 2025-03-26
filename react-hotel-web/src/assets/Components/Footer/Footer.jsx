import React from "react";
import logo from "../../images/logo.png";
import footerCSS from './Footer.module.css';

function Footer() {

    return (
        <footer className={`${footerCSS.footer_container} section`}>
            <div className={footerCSS.footer_links}>
                <div className={footerCSS.logo}>
                    <img src={logo} alt="logo" className={footerCSS.logo_img} />
                </div>
            </div>

            <div className={footerCSS.footer_links}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Rooms</p>
                <p>Services</p>
            </div>

            <div className={footerCSS.footer_links}>
                <h3>Contact and Reservation</h3>
                <p><i className="ri-phone-line">  0935 281 0508</i></p>
                <p><i class="ri-mail-line"> sales@hotelinigo.ph</i></p>
                <p>< i class="ri-links-line">  http://www.hotelinigo.ph/</i></p>

            </div>

            <div className={footerCSS.footer_links}>
                <h3>Hotel Address</h3>
                <p><i class="ri-time-line"> Always Open </i></p>
                <p> <i class="ri-home-2-line">  Brgy 19 Rizal Street.,  Cabangan, Legazpi City, Legazpi, Philippines, 4500</i></p>
            </div>
        </footer>
    )
}

export default Footer;