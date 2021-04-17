import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Sidebar from '../../UsersPage/Sidebar/Sidebar';

const ManageService = () => {


  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setOrders(data))
  },[orders])

   const deleteItem = (id, e) => {
      fetch(`https://floating-reaches-34185.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
   }

  return (
    <div className="container">
       <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5">
        <h2 className="m-3">Available services</h2>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(x => (
                    <tr key={x._id}>
                      <td>{x.name}</td>
                      <td>$ {x.price}</td>
                      <td> &nbsp; <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteItem(`${x._id}`)} style={{cursor: 'pointer'}}/></td>
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

export default ManageService;