import React from 'react'
import { Link } from 'react-router-dom'

const ExtraIncome = () => {
   return (
      <div className="flexiblehour">
         <div className="container2">
            <img
               src={`${process.env.PUBLIC_URL}/images/banner2.jpg`}
               className="img-fluid"
            />
            <h1>Earn Competitive fees</h1>
            <p>
               We pay a competitive fee for each order you deliver. You can earn
               tips from customers too, to help towards your earning goals. You
               can take advantage of busy areas and earn more at evenings and
               weekends.
            </p>
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

export default ExtraIncome
