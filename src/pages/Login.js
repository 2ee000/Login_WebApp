import React from 'react';
import Button from '../components/LoginButton';
import Input from '../components/LoginInput';
import '../styles/login.css';

function LoginBackground() {
  return (
    <div className='login__background'>
    </div>
  )
}

class Login extends React.Component {
  render() {
    return (
      <div className='login'>
        <div className='login-app'>
          <div className='login-wrapper'>
            <Input/>
            <Button/>
          </div>
          <LoginBackground/>
        </div>
      </div>
    );
  }
}

export default Login;