import React from 'react';
import axios from "axios";

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
        window.localStorage.setItem('token', res.data.payload);
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
            Username
          <input
            type="text"
            placeholder=" Enter Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          
          Password
          <input
            type="text"
            placeholder="Enter Pssword"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Go!"/>
          </label>
          
        </form>
      </div>
    );
  }
}

export default Login;
