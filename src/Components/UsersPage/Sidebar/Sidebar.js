import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsDoctor(data));
  }, [loggedInUser.email])

  return (
    <div className="m-5">
      <div className="p-4 m-4" style={{ backgroundColor: '#e89623', height: '70vh' }}>
        {
          isDoctor === false ?
          <div>
          <Link style={{ textDecoration: "none" }} to="/book"><p>Book</p></Link>
        <Link style={{ textDecoration: "none" }} to="/bookinglist"><p>Booking list</p></Link>
        <Link style={{ textDecoration: "none" }} to="/review"><p>Review</p></Link>
        </div> : null
        }
        {
          isDoctor &&
          <div>
            <Link style={{ textDecoration: "none" }} to="/admin/orders"><p>Order list</p></Link>
            <Link style={{ textDecoration: "none" }} to="/admin/addservice"><p>Add service</p></Link>
            <Link style={{ textDecoration: "none" }} to="/makeadmin"><p>Make admin</p></Link>
            <Link style={{ textDecoration: "none" }} to="/manage"><p>Manage services</p></Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Sidebar;