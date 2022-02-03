import React from 'react'
import { storage } from '../config/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState } from 'react'
import ProfileModal from './ProfileModal'
import BankDetailsModal from './BankDetailsModal'
import VehicleModal from './VehicleModal'
import VehicleDocModal from './VehicleDocModal'

const Profile = ({ values, handleChange }) => {
   const [progress, setProgress] = useState(0)

   const [openModal1, setOpenModal1] = useState(false)
   const [openModal2, setOpenModal2] = useState(false)
   const [openModal3, setOpenModal3] = useState(false)
   const [openModal4, setOpenModal4] = useState(false)

   const formHandler = (e) => {
      e.preventDefault()

      const file = e.target[0].files[0]
      uploadFiles(file)
   }

   const uploadFiles = (file) => {
      if (!file) return
      const storageRef = ref(storage, `/ridersweb/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
         'state_changed',
         (snapshot) => {
            const prog = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )

            setProgress(prog)
         },
         (err) => console.log(err),
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) =>
               console.log(url)
            )
         }
      )
   }
   return (
      <div className="profile">
         <div>
            <i class="fas fa-user-circle"></i>
            <h3>Profile</h3>
            <button
               onClick={() => {
                  setOpenModal1(true)
               }}
               className="btn btn-warning"
            >
               Add Personal Documents
            </button>
            {openModal1 && <ProfileModal closeModal={setOpenModal1} />}
            <button
               onClick={() => {
                  setOpenModal2(true)
               }}
               className="btn btn-warning"
            >
               Add Bank Details
            </button>
            {openModal2 && (
               <BankDetailsModal
                  values={values}
                  handleChange={handleChange}
                  closeModal={setOpenModal2}
               />
            )}

            <button
               onClick={() => {
                  setOpenModal3(true)
               }}
               className="btn btn-warning"
            >
               Add Vehicle
            </button>
            {openModal3 && (
               <VehicleModal
                  values={values}
                  handleChange={handleChange}
                  closeModal={setOpenModal3}
               />
            )}
            <button
               onClick={() => {
                  setOpenModal4(true)
               }}
               className="btn btn-warning"
            >
               Vehicle Documents
            </button>
            {openModal4 && (
               <VehicleDocModal
                  values={values}
                  handleChange={handleChange}
                  closeModal={setOpenModal4}
               />
            )}
         </div>
      </div>
   )
}

export default Profile
