import React from 'react';
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="bg-primary p-3">
      <div className="row m-4 p-2">
        <div className="col-md-4">
          <p className="text-white">PhotoScape</p>
          <p className="text-white">A one stop solution for all of your memories.</p>
          <p className="text-seconday text-white" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque et iste porro quibusdam fugit modi laboriosam beatae ad expedita?</p>
        </div>
        <div className="col-md-3">
          <p className="text-white">Important links</p>
           <p className="text-white">Home</p>
           <p className="text-white">Contact us</p>
           <p className="text-white">Schedule a booking</p>
           <p className="text-white">Privacy policy</p>
        </div>
        <div className="col-md-2">
          <p className="text-white">Follow us on:</p>
          <p className="text-white"><FontAwesomeIcon icon={faFacebook}/>  &nbsp;Facebook</p>
          <p className="text-white"><FontAwesomeIcon icon={faTwitter} />  &nbsp;Twitter</p>
          <p className="text-white"><FontAwesomeIcon icon={faInstagram}/>  &nbsp;Instagram</p>
          <p className="text-white"><FontAwesomeIcon icon={faWhatsapp}/>  &nbsp;Whatsapp</p>
        </div>
        <div className="col-md-3">
          <p className="text-white">Jump to:</p>
          <p className="text-white">Where to start</p>
          <p className="text-white">How to reach to a service provider</p>
          <p className="text-white">Payment methods</p>
          <p className="text-white">Famous places to shoot</p>
        </div>
        <div className="text-center mt-3 text-white"> &copy; {new Date().getFullYear()}<small className="text-white"> Copyright: Samiha Tasnim </small></div>
      </div>
    </div>
  );
};

export default Footer;