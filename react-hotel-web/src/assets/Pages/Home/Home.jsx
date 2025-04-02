import React from 'react'
import './Home.module.css'

import Nav from '../../Components/Navbar/Nav'
import Header from '../../Components/Header/Header'
import RoomSection from '../../Components/Room Section/RoomSection'
import AboutSection from '../../Components/AboutSection/About'
import Footer from '../../Components/Footer/Footer'
import Facilities from '../../Components/Facilities/Facilities'





const Home = () => {
    return (
        <div>
            <Nav />
            <Header />
            <RoomSection />
            <AboutSection />
            <Facilities />
            <Footer />
        </div>
    )
}

export default Home
