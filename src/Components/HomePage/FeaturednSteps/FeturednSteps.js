import React from 'react';
import icon1 from '../../../../src/images/svg-icons/ic-1.svg';
import icon2 from '../../../../src/images/svg-icons/ic-2.svg';
import icon3 from '../../../../src/images/svg-icons/ic-3.svg';
import icon4 from '../../../../src/images/svg-icons/ic-4.svg';
import icon5 from '../../../../src/images/svg-icons/ic-5.svg';
import icon6 from '../../../../src/images/svg-icons/ic-6.svg';

const FeturedArr = [
  {
    name: 'Great Photos',
    image: icon1,
    details: 'We always make sure give you the best photos output with High Definition Pictures.'
  },
  {
    name: 'Easy Booking',
    image: icon2,
    details: 'You can easy booking our photographers by website and also by apps.'
  },
  {
    name: 'Anytime & Anywhere',
    image: icon3,
    details: 'You can schedule your photoshoot anytime and anywhere you want to do it.'
  },
  {
    name: 'Professional',
    image: icon4,
    details: 'We have more than 1,000 photographers and ready to take best moment with you.'
  },
  {
    name: 'Affordable',
    image: icon5,
    details: 'Get great photos starting from USD 700 per session. Always have discount every month.'
  },
  {
    name: 'Fast File Delivery',
    image: icon6,
    details: 'Ready to give you fast file delivery. We make sure file will delivered maximal 2x48.'
  }
]

const FeturednSteps = () => {

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-center mt-5">
        <button type="button" class="btn btn-outline-success my-4 text-success">FEATURED</button>
      </div>
      <h2 className="mb-3 text-center text-primary">Why you Should Choose Us</h2>
      <p className="text-muted text-center fs-5 mt-3  mx-auto w-75">
        PhotoScape is an photography team based on NY, USA. We are small team with big vision of future. We believe everything can be memorized with picture.
      </p>
      <br />

      <div className="row">
        {
          FeturedArr.map(x => (
            <div className="col-md-6 col-lg-4 col-sm-6 my-3">
              <div className="card p-5 rounded shadow border-0">
                <img src={x.image} className="card-img-top" alt="..." style={{ height: '60px' }} />
                <div className="card-body">
                  <p className="text-center">{x.name}</p>
                  <p className="text-secondary card-text text-center">{x.details}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FeturednSteps;