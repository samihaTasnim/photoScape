import React from 'react';
import { Link } from 'react-router-dom';

const brandColor = {
  color: '#e89623'
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" style={brandColor} href="..">Travally</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/home" className="nav-link active p-4 text-white" aria-current="page" href="..">Home</Link >
            <Link to="/home" className="nav-link active p-4 text-white" href="..">About us</Link >
            <Link to="#" className="nav-link active p-4 text-white" href="..">Contact</Link>
            <Link to="/admin"className="nav-link active p-4 text-white" href="..">Admin</Link>
            <Link to="/login"className="nav-link active p-4 text-white"  href=".."> <button className="btn btn-secondary" style={{backgroundColor: '#e89623'}}>Login</button> </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;