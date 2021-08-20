import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
 import { faPlus } from '@fortawesome/free-solid-svg-icons';
 import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
 import { faTasks } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const userToken = sessionStorage.getItem('token')
  console.log(userToken);
  console.log(isAdmin);

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser.email])

  return (
    <div className="m-5">
      <div className="p-4 m-4" style={{ backgroundColor: '#e89623', height: '90vh' }}>
        {
          isAdmin === false ?
          <div>
          <Link style={{ textDecoration: "none" }} to="/book/:id"><p><FontAwesomeIcon icon={faClipboardCheck} />  &nbsp; Book</p></Link>
        <Link style={{ textDecoration: "none" }} to="/bookinglist"><p><FontAwesomeIcon icon={faList} />  &nbsp;  Booking list</p></Link>
        <Link style={{ textDecoration: "none" }} to="/review"><p><FontAwesomeIcon icon={faPencilAlt} />  &nbsp; Review</p></Link>
        </div> : null
        }
        {
          isAdmin &&
          <div>
            <Link style={{ textDecoration: "none" }} to="/admin/orders"><p><FontAwesomeIcon icon={faList} />&nbsp; Order list</p></Link>
            <Link style={{ textDecoration: "none" }} to="/admin/addservice"><p><FontAwesomeIcon icon={faPlus} /> &nbsp; Add service</p></Link>
            <Link style={{ textDecoration: "none" }} to="/makeadmin"><p><FontAwesomeIcon icon={faUserPlus} /> &nbsp; Make admin</p></Link>
            <Link style={{ textDecoration: "none" }} to="/manage"><p><FontAwesomeIcon icon={faTasks} />&nbsp; Manage services</p></Link>
          </div>
        }
      </div>
    </div>
  );
};



export default Sidebar;