import React from 'react'
import { Link } from 'react-router-dom'

const Nota = () => {
   return (
      <div className="flexiblehour nota">
         <div className="container2">
            <h1>Work that suits you!</h1>
            <p>Make money on your own schedule with a scooter, keke or car.</p>
            <div>
               <img
                  src={`${process.env.PUBLIC_URL}/images/icon1.jpg`}
                  className="img-fluid"
               />
               <p>
                  Organise your work to fit around your lifestyle and get more
                  flexibility.
               </p>
            </div>
            <div>
               <img
                  src={`${process.env.PUBLIC_URL}/images/icon2.jpg`}
                  className="img-fluid"
               />
               <p>
                  Reach your earning goals. We pay a competitive fee for each
                  order you deliver.
               </p>
            </div>
            <div>
               <img
                  src={`${process.env.PUBLIC_URL}/images/icon3.jpg`}
                  className="img-fluid"
               />
               <p>
                  Get round-the-clock support. We offer safety training,
                  equipment and free accident cover.
               </p>
            </div>
            <div className="container2-buttons">
               <Link>
                  <button id="btn-back">Back</button>
               </Link>
               <Link to="/worklocation">
                  <button id="btn-next">Perfect, Lets do it!</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Nota
