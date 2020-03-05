import React from 'react';
import './App.css';

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreatePlant from "./Components/CreatePlant";
import Welcome from "./Components/Welcome";
import { Link, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {

  return (

   <div className="App">
    <nav className='navi'>
     <h1 className="PQ-header">  Plant Quencher  </h1>
      <div className="nav-links">
          <Link className="nav-links" to="/"> <h4 className="btn"> Home  </h4></Link>
          <Link className="nav-links" to="/SignUp"> <h4 className="btn"> SignUp </h4></Link>
          <Link className='nav-links' to="/login"> <h4 className="btn"> Log In </h4> </Link>
      </div>
   </nav>

      <Switch>
        
        <Route exact path="/" component= {Welcome}/>
        <Route exact path="/SignUp" component={SignUp}/> 
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/Log/:plantID">  </Route>
      </Switch>
      {/* <CreatePlant /> */}
    </div>

  );
}
export default App;