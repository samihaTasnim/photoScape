import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../HomepageBanner/Banner';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TouristSpots from '../TouristSpots/TouristSpots';
import TourPackages from '../TourPackages/TourPackages';

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <TouristSpots></TouristSpots>
      <TourPackages></TourPackages>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;