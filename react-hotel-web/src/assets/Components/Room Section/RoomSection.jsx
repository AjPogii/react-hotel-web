import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import roomsCSS from "./RoomSection.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function RoomSection() {


    const sliderRef = useRef(null);



    const rooms = [
        {
            id: 1,
            title: "Luxury Room",
            price: "$250",
            image: "/api/placeholder/400/320",
            features: [
                "Elegant and comfortable.",
                "Plush furnishings.",
                "Premium amenities."
            ]
        },
        {
            id: 2,
            title: "Guest Rooms",
            price: "$200",
            image: "/api/placeholder/400/320",
            features: [
                "Stylish and cozy.",
                "Modern features.",
                "Tasteful decor."
            ]
        },
        {
            id: 3,
            title: "Sea View Suite",
            price: "$300",
            image: "/api/placeholder/400/320",
            features: [
                "Stunning ocean views.",
                "Private balcony.",
                "Exclusive perks."
            ]
        }
    ];

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',

        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => { },
        afterChange: (current) => { },


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ],
        customPaging: i => (
            <button
                className={roomsCSS.dot}
                aria-label={`Go to slide ${i + 1}`}
            />
        ),


        nextArrow: <NextArrow onClick={nextSlide} />,
        prevArrow: <PrevArrow onClick={prevSlide} />


    };




    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className={`${roomsCSS.arrowButton} ${roomsCSS.nextButton}`}
                onClick={onClick}
                aria-label="Next slide"
            >
                <ChevronRight />
            </button>
        );
    }


    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className={`${roomsCSS.arrowButton} ${roomsCSS.prevButton}`}
                onClick={onClick}
                aria-label="Previous slide"
            >
                <ChevronLeft />
            </button>
        );
    }


    return (

        <div className={`${roomsCSS.Rooms_container} section`}>
            <div className={roomsCSS.Rooms_title}>
                <h1 className="section_heading">Rooms and Suites</h1>
                <p>Each room is designed to offer the perfect combination of comfort, elegance, and sophistication.</p>
            </div>

            <div className={roomsCSS.Room_Cards}>
                <Slider ref={sliderRef} {...settings} className={roomsCSS.slider}>
                    {rooms.map((room) => (
                        <div key={room.id} className={roomsCSS.slide}>
                            <div className={roomsCSS.Room_card}>
                                <div className={roomsCSS.Room_Img}>
                                    <img src={room.image} alt={`${room.title} Image`} />
                                    <div className={roomsCSS.priceTag}>
                                        <span>{room.price}</span>
                                    </div>
                                </div>

                                <div className={roomsCSS.Room_Content}>
                                    <h3>{room.title}</h3>
                                    <div className={roomsCSS.features}>
                                        {room.features.map((feature, i) => (
                                            <p key={i} className={roomsCSS.feature}>
                                                <span className={roomsCSS.bullet}></span>
                                                {feature}
                                            </p>
                                        ))}
                                    </div>
                                    <button className={roomsCSS.detailsButton}>

                                        More Details <ChevronRight className={roomsCSS.arrowIcon} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className={roomsCSS.dotsNavigation}>
                    {rooms.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${roomsCSS.dot}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className={roomsCSS.viewAllContainer}>
                <button className={roomsCSS.viewAllButton}>
                    View All Rooms
                </button>
            </div>
        </div>
    );
};

export default RoomSection;



