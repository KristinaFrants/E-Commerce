import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'



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
       <Route path="/login">
         <Login/>
       </Route>

       {/*Default Route*/}
       <Route path="/">
         <Home/>
         {/* <h1>Home</h1> */}
       </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
