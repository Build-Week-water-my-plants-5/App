import React from 'react';
import './App.css';

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreatePlant from "./Components/CreatePlant";
import Welcome from "./Components/Welcome";
import { Link, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';

import { TextField, Button } from '@material-ui/core';

function App() {

  return (

   <div className="App">
    <nav className='navi'>
     <h1 className="PQ-header">  Plant Quencher  </h1>
      <div className="nav-links">
          <Link className="nav-links" to="/"> <Button variant="contained" color="secondary" type="submit"> Home  </Button></Link>
          <Link className="nav-links" to="/SignUp"> <Button variant="contained" color="secondary" type="submit">  SignUp </Button></Link>
          <Link className='nav-links' to="/login"> <Button variant="contained" color="secondary" type="submit">  Log In </Button></Link>
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



