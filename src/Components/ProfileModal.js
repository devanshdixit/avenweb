import React, { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../config/firebase'

function ProfileModal({ closeModal }) {
   const [progress, setProgress] = useState(0)

   const formHandler = (e) => {
      e.preventDefault()

      const file = e.target[0].files[0]
      console.log(e)
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
      <div className="modalBackground">
         <div className="modalContainer">
            <h2>Personal Documents</h2>
            <form onSubmit={formHandler}>
               <div id="select-file1">
                  <h5>Birth Certificate</h5>
                  <input type="file" />
               </div>
               <div id="select-file2">
                  <h5>Driving License</h5>
                  <input type="file" />
               </div>
               <div id="select-file3">
                  <h5>Passport</h5>
                  <input type="file" />
               </div>
               <div id="select-file4">
                  <h5>Election Card</h5>
                  <input type="file" />
               </div>

               <div className="modal-buttons">
                  <button id="submit" type="submit">
                     Submit
                  </button>
                  <button id="cancel" onClick={() => closeModal(false)}>
                     cancel
                  </button>
               </div>
               <h3>Uploaded {progress} %</h3>
            </form>
         </div>
      </div>
   )
}

export default ProfileModal
