import React, { useRef } from "react";
import navCSS from './../Navbar/Nav.module.css';
import logo from "../../images/logo.png";

function Nav() {

    const menu = useRef();
    const navbar = useRef();


    const menubtn = () => {
        menu.current.classList.toggle(navCSS.active);
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.current.classList.add(navCSS.navbarScroll);
        }
        else {
            navbar.current.classList.remove(navCSS.navbarScroll);
        }
    })


    return (

        <div className={navCSS.nav_container} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#">
                    <img src={logo} alt="logo" className={navCSS.logo_img} />
                </a>
            </div>

            <ul ref={menu}>
                <li><a href="home">Home</a></li>
                <li><a href="room">Rooms</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="services">Services</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <button className={navCSS.btn}>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menubtn}> </i>
            </div>

        </div>
    )
}
export default Nav;