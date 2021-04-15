import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
   <div className="m-5">
      <div className="p-4 m-4" style={{backgroundColor: '#e89623', height: '70vh'}}>
      <Link style={{textDecoration:"none"}} to="/book"><p>Book</p></Link>
      <Link style={{textDecoration:"none"}} to="/bookingslist"><p>Booking list</p></Link>
      <Link style={{textDecoration:"none"}} to="/review"><p>Review</p></Link>
    </div>
   </div>
  );
};

export default Sidebar;