import React from "react";
import headerCSS from './../Header/Header.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Parallax } from "swiper/modules";
import { useState } from "react";



function Header() {

    const [bookingData, setBookingData] = useState({
        roomType: '',
        checkIn: '',
        checkOut: '',
        numPeople: 1
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search/booking data submitted:', bookingData);

    };

    return (
        <div className={headerCSS.header_container}>


            <div className={headerCSS.header_slider}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    className={headerCSS.swiper_container}
                    autoplay={{ delay: 2500 }}
                    parallax={true}
                    speed={1000}
                    modules={[Autoplay, Parallax]}

                >
                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide1}`} >
                            <div className={headerCSS.content}>
                                <small data-swiper-parallax="-200">Hospitality with heart, Comfort with class</small>
                                <h2 data-swiper-parallax="-400">Enjoy your <span>Luxury </span>Experience <br />
                                    here at Inigo Hotel</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide2}`}>
                            <div className={headerCSS.content}>
                                <small data-swiper-parallax="-200">Hospitality with heart, Comfort with class</small>
                                <h2 data-swiper-parallax="-400">Enjoy your <span>Luxury</span>  Experience <br />
                                    here at Inigo Hotel</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${headerCSS.header_slide} ${headerCSS.slide3}`}>
                            <div className={headerCSS.content}>
                                <small data-swiper-parallax="-200">Hospitality with heart, Comfort with class</small>
                                <h2 data-swiper-parallax="-400">Enjoy your <span>Luxury</span> Experience <br />
                                    here at Inigo Hotel</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>




                <div className={headerCSS.booking_container}>

                    <form onSubmit={handleSearch} className={headerCSS.booking_form}>
                        <div className={headerCSS.form_group}>
                            <label className={headerCSS.booking_field}>Room type </label>
                            <select
                                name="roomType"
                                value={bookingData.roomType}
                                onChange={handleInputChange}
                            >
                                <option value="">Select type</option>
                                <option value="single">Single Room</option>
                                <option value="double">Double Room</option>
                                <option value="executive">Executive</option>
                            </select>
                        </div>

                        <div className={headerCSS.form_group}>
                            <label className={headerCSS.booking_field}>Check In:</label>
                            <input
                                type="date"
                                name="checkIn"
                                value={bookingData.checkIn}
                                onChange={handleInputChange}
                                placeholder="arrival date"
                            />
                        </div>

                        <div className={headerCSS.form_group}>
                            <label className={headerCSS.booking_field}>Check Out:</label>
                            <input
                                type="date"
                                name="checkOut"
                                value={bookingData.checkOut}
                                onChange={handleInputChange}
                                placeholder="departure date"
                            />
                        </div>

                        <div className={headerCSS.form_group}>
                            <label className={headerCSS.booking_field}>Persons </label>
                            <input
                                type="number"
                                name="numPeople"
                                min="1"
                                value={bookingData.numPeople}
                                onChange={handleInputChange}
                                placeholder="no of people"
                            />
                        </div>

                        <div className={headerCSS.header_btns}>
                            <button type="submit" className={headerCSS.book_button}>Search</button>
                            <i className="ri-menu-4-line" id={headerCSS.bars}> </i>
                        </div>
                    </form>
                </div>

            </div>


        </div>

    )
}
export default Header;