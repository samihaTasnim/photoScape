import React from 'react';
import Sidebar from '../UsersPage/Sidebar/Sidebar';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;