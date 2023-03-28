import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import LoginInput from '../components/LoginInput';
import '../styles/login.css';

function LoginBackground() {
  return (
    <div className='login__background'>
    </div>
  )
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      navigateHome: false
    };
    this.loginCheck = this.loginCheck.bind(this);
    this.loginAxios = this.loginAxios.bind(this);
    this.loginError = this.loginError.bind(this);
  }

  async loginAxios() {
    await axios.post("http://15.164.100.35:12044/auth/login", {
      user_email: this.state.userEmail,
      user_pwd: this.state.userPassword,
    })
    .then((response) => {
      this.setState({navigateHome: true});
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  loginError() {
    if(this.state.userEmail === '') {
      window.alert('Please enter your email!');
      return;
    } else if(this.state.userPassword === '') {
      window.alert('Please enter your password!');
      return;
    } else {
      this.loginAxios();
    }
  }

  async loginCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  render() {
    return (
      <div className='login'>
        {this.state.navigateHome && <Navigate to = '/'></Navigate>}
        <div className='login-app'>
          <div className='login-wrapper'>
            <LoginInput
              userEmail = {this.state.userEmail}
              userPassword = {this.state.userPassword}
              onChange = {this.loginCheck}
            />
            <LoginButton
              userEmail = {this.state.userEmail}
              userPassword = {this.state.userPassword}
              loginError = {this.loginError}
              loginAxios = {this.loginAxios}
            />
          </div>
          <LoginBackground/>
        </div>
      </div>
    );
  }
}

export default Login;