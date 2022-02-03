import { Button } from 'bootstrap'
import React, { useState } from 'react'
import About from './About'
import Profile from './Profile'
import Confirm from './Confirm'

const MultiStepForm = () => {
   const [activeStep, setActiveStep] = useState(0)
   //steps
   const getSteps = () => {
      return ['About', 'Profile', 'Submit']
   }

   const steps = getSteps()

   //statw variable
   const [multiFormValues, setMultiFormValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      vehicletype: '',
      bankName: '',
      accHolderName: '',
      accNumber: '',
      swiftIFSCCode: '',
      serviceType: '',
      brand: '',
      model: '',
      numberPlate: '',
      vehicleColor: ''
   })

   //Navigate to next page
   const handleNext = () => {
      setActiveStep((nextStep) => nextStep + 1)
   }

   //Navigate to prev page
   const handleBack = () => {
      setActiveStep((prevStep) => prevStep - 1)
   }

   //handle form value state on change
   const handleChange = (input) => (e) => {
      setMultiFormValues({ ...multiFormValues, [input]: e.target.value })
   }

   return (
      <div>
         {activeStep === 0 && (
            <About values={multiFormValues} handleChange={handleChange} />
         )}
         {activeStep === 1 && (
            <Profile values={multiFormValues} handleChange={handleChange} />
         )}
         {activeStep === 2 && (
            <Confirm values={multiFormValues} handleChange={handleChange} />
         )}

         <div className="btn-container">
            <div>
               <button
                  id="btn-back"
                  disabled={activeStep === 0}
                  className="mr-5"
                  onClick={handleBack}
                  style={activeStep === 2 ? { display: 'none' } : {}}
               >
                  Back
               </button>
               <button
                  id="btn-next"
                  className="ml-5"
                  variant="contained"
                  onClick={handleNext}
                  style={activeStep === 2 ? { display: 'none' } : {}}
               >
                  {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
               </button>
            </div>
         </div>
      </div>
   )
}

export default MultiStepForm
