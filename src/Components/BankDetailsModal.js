import React from 'react'

function BankDetailsModal({ values, handleChange, closeModal }) {
   return (
      <div className="modalBackground">
         <div className="modalContainer">
            <h2>Bank Details</h2>
            <form>
               <input
                  type="text"
                  className="input"
                  placeholder="Bank Name"
                  value={values.bankName}
                  onChange={handleChange('bankName')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Account Holder Name"
                  value={values.accHolderName}
                  onChange={handleChange('accHolderName')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Account Number"
                  value={values.accNumber}
                  onChange={handleChange('accNumber')}
               />
               <input
                  type="text"
                  className="input"
                  placeholder="Swift/IFSC code"
                  value={values.swiftIFSCCode}
                  onChange={handleChange('swiftIFSCCode')}
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

export default BankDetailsModal
