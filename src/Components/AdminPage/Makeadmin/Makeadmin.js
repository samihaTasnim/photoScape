import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../UsersPage/Sidebar/Sidebar';

const Makeadmin = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('https://floating-reaches-34185.herokuapp.com/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res))
  }
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email")} id="exampleFormControlInput1" placeholder="Your email" />
              </div>
              <input type="submit" value="Make admin" className="btn btn-primary"/>
            </form>
        </div>
      </div>
    </div>    
  );
};

export default Makeadmin;