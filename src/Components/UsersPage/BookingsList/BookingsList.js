import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingsList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser.displayName);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7">

        </div>
      </div>
    </div>
  );
};

export default BookingsList;