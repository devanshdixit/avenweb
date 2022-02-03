import React from 'react'

function VehicleModal({ values, handleChange, closeModal }) {
   return (
      <div className="modalBackground">
         <div className="modalContainer">
            <h2>Vehicle Details</h2>
            <form>
               <input
                  type="text"
                  className="input"
                  placeholder="Service Type"
                  value={values.serviceType}
                  onChange={handleChange('serviceType')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Brand"
                  value={values.brand}
                  onChange={handleChange('brand')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Model"
                  value={values.model}
                  onChange={handleChange('model')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Number Plate"
                  value={values.numberPlate}
                  onChange={handleChange('numberPlate')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Vehicle Color"
                  value={values.vehicleColor}
                  onChange={handleChange('vehicleColor')}
               />

               <div className="modal-buttons">
                  <button onClick={() => closeModal(false)} id="submit">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default VehicleModal
