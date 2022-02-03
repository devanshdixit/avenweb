import { collection, addDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../config/firebase'

const Confirm = ({ values }) => {
   const dbRef = collection(db, 'ridersWeb')
   const {
      firstName,
      lastName,
      email,
      number,
      accHolderName,
      bankName,
      accNumber,
      swiftIFSCCode,
      serviceType,
      brand,
      model,
      numberPlate,
      vehicleColor
   } = values

   useEffect(() => {
      addDoc(dbRef, {
         firstName: firstName,
         lastName: lastName,
         email: email,
         number: number,

         accHolderName: accHolderName,
         bankName: bankName,
         accNumber: accNumber,
         swiftIFSCCode: swiftIFSCCode,
         serviceType: serviceType,
         brand: brand,
         model: model,
         numberPlate: numberPlate,
         vehicleColor: vehicleColor
      })
         .then((data) => console.log(data))
         .catch((err) => console.log(err))
   }, [])

   return (
      <div>
         <h2
            style={{
               alignItems: 'center',
               margin: '30px 0px',
               display: 'flex',
               justifyContent: 'center'
            }}
         >
            Your data has been sent successfully!!
         </h2>
         <ul
            className="list-group"
            style={{ maxWidth: '600px', margin: 'auto' }}
         >
            <li className="list-group-item">First Name: {firstName}</li>
            <li className="list-group-item">Last Name: {lastName}</li>
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone Number: {number} </li>
            <li className="list-group-item">
               Account Holder Name: {accHolderName}
            </li>
            <li className="list-group-item">Bank Name: {bankName} </li>
            <li className="list-group-item">Account Number: {accNumber} </li>
            <li className="list-group-item">
               Swift/IFSC Code: {swiftIFSCCode}
            </li>
            <li className="list-group-item">Service Type: {serviceType} </li>
            <li className="list-group-item">brand: {brand} </li>
            <li className="list-group-item">Model: {model} </li>
            <li className="list-group-item">Number Plate: {numberPlate} </li>
            <li className="list-group-item">Vehicle Color: {vehicleColor} </li>
         </ul>
      </div>
   )
}

export default Confirm
