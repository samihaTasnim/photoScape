import React from 'react';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <AdminSidebar></AdminSidebar>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;