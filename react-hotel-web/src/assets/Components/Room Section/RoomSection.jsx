import React from "react";
import roomsCSS from "./RoomSection.module.css";
import RoomImg1 from "../../../assets/Images/room-img1.png";
import RoomImg2 from "../../../assets/Images/room-img2.png";
import RoomImg3 from "../../../assets/Images/room-img3.png";




function RoomSection() {
    const rooms = [
        {
            id: 1,
            title: 'Standard Room',
            price: '₱8,500',
            perNight: '/ per night',
            image: RoomImg1,

        },
        {
            id: 2,
            title: 'Executive Room',
            price: '₱8,500',
            perNight: '/ per night',
            image: RoomImg2,

        },
        {
            id: 3,
            title: 'Deluxe Room',
            price: '₱9,400',
            perNight: '/ per night',
            image: RoomImg3,

        },
    ];

    return (


        <div className={`${roomsCSS.Rooms_container} section`}>

            <div className={roomsCSS.Rooms_title}>
                <h1 className="section_title">Rooms & Suites</h1>
                <p className={roomsCSS.description}>
                    Experience ultimate comfort in our elegantly appointed rooms and suites, designed for relaxation and rejuvenation.
                </p>
            </div>

            <div className={roomsCSS.Room_Cards}>
                {rooms.map((room) => (
                    <div key={room.id} className={roomsCSS.slide}>
                        <div className={roomsCSS.Room_card}>
                            <div className={roomsCSS.Room_Img}>
                                <img src={room.image} alt={`${room.title} Image`} />

                            </div>

                            <div className={roomsCSS.Room_Content}>
                                <h3>{room.title}</h3>
                                <div className={roomsCSS.priceContainer}>
                                    <span className={roomsCSS.priceAmount}>{room.price}</span>
                                    <span className={roomsCSS.pricePeriod}>{room.perNight}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={roomsCSS.viewAllContainer}>
                <button className={roomsCSS.viewAllButton}>
                    VIEW ALL
                </button>

            </div>
        </div>
    );
};

export default RoomSection;