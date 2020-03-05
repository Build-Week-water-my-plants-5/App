import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { registerUser } from '../actions'
import { connect } from 'react-redux';



const SignUp = (props) => {

 const [ user, setUser] = useState({
   credentials: {
     username: '',
     password: '',
     phone: '',
     email: ''
   },
 });
  
 const handleChanges = e => {
   setUser({
     credentials: {
       ...user.credentials,
       [e.target.name]: e.target.value
     }
   });
 };

 const handleSubmit = e => {
  e.preventDefault();
  console.log(user);
  registerUser(user);
  props.history.push('/login');
};

    return (
        <div className="Sign"> 
        <h1>Post Here 2!</h1>
      <h3>Please Register Below:</h3>
      <form onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        color="secondary"
        id="username-input"
        label="Username"  //<- Label is capitialized for the placeholder - the credential itself is lowercase 
        type="username"
        name="username"
        value={user.credentials.username}
        onChange={handleChanges}
       />
        
      <TextField
        variant="filled"
        color="secondary"
        id="password-input"
        label="Password"  //<- Label is capitialized for the placeholder - the credential itself is lowercase 
        type="password"
        name="password"
        value={user.credentials.password}
        onChange={handleChanges}
     />

      <TextField
        variant="filled"
        color="secondary"
        id="phone-input"
        label="Phone"  //<- Label is capitialized for the placeholder - the credential itself is lowercase 
        type="phone"
        name="phone"
        value={user.credentials.phone}
        onChange={handleChanges}
     />

      <TextField
        variant="filled"
        color="secondary"
        id="email-input"
        label="Email" //<- Label is capitialized for the placeholder - the credential itself is lowercase 
        type="email"
        name="email"
        value={user.credentials.email}
        onChange={handleChanges}
     />

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        >
          Register
      </Button>

      </form>
        </div>
    )
}

export default connect()(SignUp);