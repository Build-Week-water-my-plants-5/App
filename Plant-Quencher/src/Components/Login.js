import React from 'react';
import axios from "axios";
import { TextField, Button } from '@material-ui/core';
// LOGIN - The login page is use a CLASS COMPONENT 
// This page does not have outside actions or reduce
// for future reference try using class components on things like card components.

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api
    axios
      .post('https://wmpbackend.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        // navigate the user to /protected (whatever landing page)
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Log">
        <form onSubmit={this.login}>
          <h3>Log In!</h3>

          <label>
           
          <TextField
            variant="filled"
            color="secondary"
            label="Username"
            type="username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

         
          <TextField
            variant="filled"
            color="secondary"
            label="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        <Button
           variant="contained"
           color="secondary"
           type="submit"
        >
          Login
      </Button>

          </label>
          
        </form>
      </div>
    );
  }
}

export default Login;
