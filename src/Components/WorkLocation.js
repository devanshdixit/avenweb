import React from 'react'
import { Link } from 'react-router-dom'

function WorkLocation() {
   return (
      <div className="worklocation">
         <div className="container2">
            <img
               src={`${process.env.PUBLIC_URL}/images/van-driver-texting.jpg`}
               className="img-fluid"
            />
            <h2>Where would you like to work?</h2>
            <select className="form-select form-select-lg mb-3">
               <option value="city1">Select City</option>
               <option value="city2">city2</option>
               <option value="city3">city3</option>
               <option value="city4">city4</option>
            </select>
            <div className="container2-buttons">
               <Link to="/aboutyourself">
                  <button id="btn-next">Next</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default WorkLocation
