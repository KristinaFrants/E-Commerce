import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51HgyLuHo57i5kpMGKKELqDAn1MfzNVis10VKnHUKlGamTwWRqp2Z9ueMQkasFygNqvPhHYUkwTRJ8plm51xtB1xL00oihmOVPM');



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser) {
        //the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
    <Header/>
     <Switch>

       <Route path="/checkout">
         <Checkout/>
       </Route>

       <Route path="/payment">
       <Elements stripe= {promise} >
         <Payment/>
         </Elements>
       </Route>

       <Route path="/login">
         <Login/>
       </Route>

       {/*Default Route*/}
       <Route path="/">
         <Home/>
       </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
