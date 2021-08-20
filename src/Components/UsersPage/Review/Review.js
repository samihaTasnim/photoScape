import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Review = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('https://floating-reaches-34185.herokuapp.com/addreview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res))
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7">
          <div className="p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name")} id="exampleFormControlInput1" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email")} id="exampleFormControlInput1" placeholder="Your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>
                <textarea className="form-control" {...register("description")}  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <input type="submit" className="btn btn-primary"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;