import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import Sidebar from '../../UsersPage/Sidebar/Sidebar';

const Addservice = () => {

  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const productInfo = {
      name: data.name,
      image: image,
      details: data.details,
      price: data.price
    };

    axios.post('https://floating-reaches-34185.herokuapp.com/addservice', productInfo )
      .then(res => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }



  const getImage = (event) => {
    const imageData = new FormData();
    imageData.set('key', '7a727552badece9d72ca5183c3ca8437');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Service Name:</label>
                <br />
                <input name="name" className="p-1" {...register("name")}  required />
              </div>
              <div className="col-md-6">
                <label htmlFor="name">Service details:</label>
                <br />
                <input name="name" className="p-1" {...register("details")}  required />
              </div>
              <div className="col-md-6">
                <label htmlFor="price">Price:</label>
                <br />
                <input name="price" {...register("price")}  required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <label htmlFor="file">Add photo:</label>
                <input type="file" className="p-2" name="file" onChange={getImage} required />
              </div>
            </div>
            <button type="submit" className="btn btn-secondary mb-3" style={{backgroundColor: '#e89623'}}disabled={!image} >Add service</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addservice;