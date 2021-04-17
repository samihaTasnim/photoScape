import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingsList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const email = loggedInUser.email;
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`https://floating-reaches-34185.herokuapp.com/orders/${email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [email])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5">
          <h2 className="m-3">Booking history</h2>
          <p>Booked by: {orders[0] && orders[0].email}</p>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <th scope="col">Paid with</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(x => (
                    <tr>
                      <td>{x.name}</td>
                      <td>$ {x.price}</td>
                      <td>{x.date}</td>
                      <td>{x.card}</td>
                      <td>{x.status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsList;