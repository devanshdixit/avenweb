import React from 'react'
import { Form } from 'react-bootstrap'

const About = ({ values, handleChange }) => {
   console.log(values, handleChange)
   return (
      <div className="worklocation">
         <div className="container2">
            <img
               src={`${process.env.PUBLIC_URL}/images/About-Yourself.jpg`}
               className="img-fluid"
            />
            <h2>Tell us about yourself</h2>
            <Form className="mt-5">
               <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                     type="text"
                     className="form-control"
                     value={values.firstName}
                     onChange={handleChange('firstName')}
                  />
               </div>
               <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                     type="text"
                     className="form-control"
                     value={values.lastName}
                     onChange={handleChange('lastName')}
                  />
               </div>
               <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     value={values.email}
                     onChange={handleChange('email')}
                  />
               </div>
               <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                     type="number"
                     className="form-control"
                     value={values.number}
                     onChange={handleChange('number')}
                  />
               </div>
               <div className="vehicle-type">
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="car"
                        onChange={handleChange('vehicleType')}
                     />
                     <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                     >
                        Car
                     </label>
                  </div>
                  <div class="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="bike"
                        onChange={handleChange('vehicleType')}
                     />
                     <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                     >
                        Bike
                     </label>
                  </div>
                  <div class="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="keke"
                        onChange={handleChange('vehicleType')}
                     />
                     <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                     >
                        Keke
                     </label>
                  </div>
               </div>
               <div class="vehicle-type">
                  <i class="fas fa-car"></i>
                  <i class="fas fa-motorcycle"></i>
                  <i class="fas fa-truck"></i>
               </div>
            </Form>
         </div>
      </div>
   )
}

export default About
