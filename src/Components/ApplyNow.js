import React from 'react'
import { Link } from 'react-router-dom'

function ApplyNow() {
   return (
      <div className="applynow-pg1">
         <div className="container-applynow">
            <img
               className="img-fluid"
               src="https://cdn.motor1.com/images/mgl/EM7GB/s1/van-driver-texting-with-phone-while-driving.webp"
            />
            <h3>What's the main reason you'd like to ride for Avenride?</h3>
            <p>We are here to help you achieve your goals</p>
            <div className="card step1">
               <Link to={'/flexiblehours'}>
                  <div className="card-body">
                     <div className="mini-container">
                        <i className="far fa-clock"></i>
                        <span> I want flexible hours</span>
                     </div>
                     <i class="fas fa-chevron-right"></i>
                  </div>
               </Link>
            </div>

            <div className="card step1">
               <Link to={'/extraincome'}>
                  <div className="card-body">
                     <div className="mini-container">
                        <i className="fas fa-coins"></i>
                        <span>I want extra income</span>
                     </div>
                     <i className="fas fa-chevron-right"></i>
                  </div>
               </Link>
            </div>

            <div className="card step1">
               <Link to={'/support'}>
                  <div className="card-body">
                     <div className="mini-container">
                        <i className="far fa-smile"></i>
                        <span>I want 24 hours support</span>
                     </div>
                     <i className="fas fa-chevron-right"></i>
                  </div>
               </Link>
            </div>

            <div className="card step1">
               <Link to={'/nota'}>
                  <div className="card-body">
                     <div className="mini-container">
                        <i className="far fa-question-circle"></i>
                        <span>None of the above</span>
                     </div>
                     <i className="fas fa-chevron-right"></i>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default ApplyNow
