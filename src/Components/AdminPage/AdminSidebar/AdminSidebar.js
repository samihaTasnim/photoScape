import React from 'react';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {
  return (
    <div className="m-5">
      <div className="p-4 m-4" style={{ backgroundColor: '#e89623', height: '70vh' }}>
        <Link style={{ textDecoration: "none" }} to="/admin/orders"><p>Order list</p></Link>
        <Link style={{ textDecoration: "none" }} to="/admin/addservice"><p>Add service</p></Link>
        <Link style={{ textDecoration: "none" }} to="/makeadmin"><p>Make admin</p></Link>
        <Link style={{ textDecoration: "none" }} to="/manage"><p>Manage services</p></Link>
      </div>
    </div>
  );
};

export default AdminSidebar;