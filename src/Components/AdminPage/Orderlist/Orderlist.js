import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'react-dropdown/style.css';
import Sidebar from '../../UsersPage/Sidebar/Sidebar';

const Orderlist = () => {

  const [orders, setOrders] = useState([])
  const [productStatus, setProductStatus] = useState('')
  const [serviceId, setServiceId] = useState('')

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  const options = [
    'pending', 'ongoing', 'done'
  ];

  useEffect(() => {
    fetch(`https://floating-reaches-34185.herokuapp.com/update/${serviceId}`, {
      method: 'PATCH',
      crossDomain: true,
       xhrFields: {
         withCredentials: true
       },
      headers: { 
        Accept: 'application/json',
      'Content-Type': 'application/json',
      '_method': 'PATCH',
      'Authorization': '' },
      body: JSON.stringify({status: productStatus})
  })
      .then(res => res.json())
      .then(data => console.log(data))
  }, [serviceId, productStatus])

  
  const handleSelect = (id, text) => {
    setProductStatus(text)
    setServiceId(id)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5">
          <h2 className="m-3">Booking orders list</h2>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(x => (
                    <tr key={x._id}>
                      <td>{x.name}</td>
                      <td>$ {x.price}</td>
                      <td>{x.date}</td>
                      <td >
                      <span className="badge bg-warning" style={{cursor: 'pointer'}} onClick={(e) => handleSelect(x._id, e.target.innerText)}>{options[0]}</span>
                      <span className="badge bg-warning" style={{cursor: 'pointer'}} onClick={(e) => handleSelect(x._id, e.target.innerText)}>{options[1]}</span>
                      <span className="badge bg-warning" style={{cursor: 'pointer'}}onClick={(e) => handleSelect(x._id, e.target.innerText)}>{options[2]}</span>
                      </td>
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

export default Orderlist;