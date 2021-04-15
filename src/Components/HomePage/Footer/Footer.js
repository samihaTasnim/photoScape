import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row m-4 p-2">
        <div className="col-md-4">
          <p>Travelly</p>
          <p >A one stop solution for all your vacation plans.</p>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque et iste porro quibusdam fugit modi laboriosam beatae ad expedita?</p>
        </div>
        <div className="col-md-3">
          <p>Important links</p>
           <p>Home</p>
           <p>Contact us</p>
           <p>Schedule</p>
           <p>Privacy policy</p>
        </div>
        <div className="col-md-2">
          <p>Follow us on:</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Whatsapp</p>
        </div>
        <div className="col-md-3">
          <p>Jump to:</p>
          <p>Where to start</p>
          <p>How to reach to a service provider</p>
          <p>Payment methods</p>
          <p>Famous places to visit</p>
        </div>
        <div className="text-center mt-3"> &copy; {new Date().getFullYear()}<small>Copyright: Samiha Tasnim </small></div>
      </div>
    </div>
  );
};

export default Footer;