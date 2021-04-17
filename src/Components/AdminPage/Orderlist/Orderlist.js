import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Orderlist = () => {

  const [orders, setOrders] = useState([])
  const [productStatus, setProductStatus] = useState('')

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  const options = [
    'pending', 'ongoing', 'done'
  ];
  const handleSelect = (id) => {
    console.log(id);
    console.log(productStatus);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <AdminSidebar></AdminSidebar>
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
                      <td>
                        <select class="form-select" aria-label="Default select example" onChange={() => handleSelect(x._id)}>
                          <option selected>{x.status}</option>
                          <option value={options[0]}>{options[0]}</option>
                          <option value={options[1]}>{options[1]}</option>
                          <option value={options[2]}>{options[2]}</option>
                        </select>
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