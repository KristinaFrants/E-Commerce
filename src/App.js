import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout'

function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
     <Switch>

       <Route path="/checkout">
         <Checkout/>

       </Route>
       <Route path="/login">
         <h1>Login</h1>
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
