import React, { useEffect } from 'react';
// aos is a library that makes animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import components 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100
      }
    );
  })

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App