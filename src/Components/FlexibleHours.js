import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import WorkLocation from './WorkLocation'

function FlexibleHours() {
   return (
      <div className="flexiblehour">
         <div className="container2">
            <img
               src={`${process.env.PUBLIC_URL}/images/banner1.jpg`}
               className="img-fluid"
            />
            <h1>Work that suits you</h1>
            <p>
               As a rider you make money on your own schedule with a car,
               bicycle or scooter! Get paid when you want. We'll transfer your
               earnings weekly. Want to get paid faster? Cash out in the app
               daily.
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

export default FlexibleHours
