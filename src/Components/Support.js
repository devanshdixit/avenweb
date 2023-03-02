import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
   return (
      <div className="flexiblehour">
         <div className="container2">
            <img
               src={`${process.env.PUBLIC_URL}/images/banner3.jpg`}
               className="img-fluid"
            />
            <h1>Get round-the-clock support!</h1>
            <p>
               Our support teams are always with you. We offer safety training
               and equipment, too, as well as free accident cover while you’re
               on the road. You will get highly visible, comfortable and
               breathable gear, suitable for the climate you’re riding in.
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

export default Support
