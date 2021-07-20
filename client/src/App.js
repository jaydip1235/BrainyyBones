import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Dates from './components/Dates';
import Register from './components/Register';
import PaymentComplete from './components/PaymentComplete';
import Error from './components/Error';
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/date/:name/:email/:phone' component={Dates}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path="/payment-complete" component={PaymentComplete} />
      <Route path = "*" component={Error}/>
    </Switch>
  )
}

export default App
