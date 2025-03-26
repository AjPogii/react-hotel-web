
import './App.css'
import About from './assets/Components/About/About'
import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'
import Nav from './assets/Components/Navbar/Nav'
import RoomSection from './assets/Components/Room Section/RoomSection'
import Services from './assets/Components/Services/Services'



const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Services />
      <RoomSection />
      <Footer />
    </div>
  )
}

export default App
