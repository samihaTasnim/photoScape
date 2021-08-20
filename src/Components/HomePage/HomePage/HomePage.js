import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../HomepageBanner/Banner';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ImgGallery from '../ImgGallery/ImgGallery';
import TourPackages from '../TourPackages/TourPackages';
import FeturednSteps from '../FeaturednSteps/FeturednSteps';

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <ImgGallery></ImgGallery>
      <TourPackages></TourPackages>
      <Services></Services>
      <FeturednSteps></FeturednSteps>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;