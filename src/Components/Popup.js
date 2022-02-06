import React from 'react'

function Popup({ setPopUp }) {
   return (
      <div className="popup">
         <div className="card">
            <img
               className="card-img-top"
               src={`${process.env.PUBLIC_URL}/images/customer-care.jpg`}
               alt="Card image cap"
            />
            <div className="card-body">
               <h4 className="card-title">
                  Thank you for updating your profile document registration
               </h4>
               <p className="card-text">
                  Please you are required to visit{' '}
                  <a href="https://www.cars360.co/" target="_blank">
                     Car 360
                  </a>{' '}
                  for final verification. please call the customer care number
                  for any support.
               </p>
               <p>Avenride we are near you</p>
               <a
                  href="#"
                  class="btn btn-danger"
                  onClick={() => setPopUp(false)}
               >
                  Close
               </a>
            </div>
         </div>
      </div>
   )
}

export default Popup
