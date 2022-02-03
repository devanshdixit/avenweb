import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import ApplyPage from './ApplyPage'
import ApplyNow from './Components/ApplyNow'
import ExtraIncome from './Components/ExtraIncome'
import FlexibleHours from './Components/FlexibleHours'
import MultiStepForm from './Components/MultiStepForm'
import Nota from './Components/Nota'
import Support from './Components/Support'

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={App} />
            <Route path="/apply" exact component={ApplyPage} />
            <Route path="/applynow" exact component={ApplyNow} />
            <Route path="/flexiblehours" exact component={FlexibleHours} />
            <Route path="/extraincome" exact component={ExtraIncome} />
            <Route path="/support" exact component={Support} />
            <Route path="/extraincome" exact component={ExtraIncome} />
            <Route path="/nota" exact component={Nota} />
            <Route path="/worklocation" exact component={MultiStepForm} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes
