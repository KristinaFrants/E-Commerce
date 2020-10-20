import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header';
import Home from "./Home";

function App() {
  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
         <h1>Checkout</h1>
       </Route>
       <Route path="/login">
         <h1>Login</h1>
       </Route>
       {/*Default Route*/}
       <Route path="/">
         <Header/>
         <Home/>
         {/* <h1>Home</h1> */}
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
