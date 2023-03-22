import React from 'react';
import '../styles/login.css';

function Background() {
  return (
    <div className='background'>
    </div>
  )
}

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='login-wrapper'>
        <p>Welcome back</p>
        <div className='input'>
          <div className='input__text'>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
          </div>
          <div className='input__extra'>
            <a href='#'>Forgot password</a>
          </div>
        </div>
      </div>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='button'>
        <div className='button-wrapper'>
          <button type='submit'>CTA</button>
          <button onClick=''><p></p>Sign in with google</button>
        </div>
        <a href='#'>Don't have an account? Sign up</a>
      </div>
    )
  }
}

class Login extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='app-wrapper'>
          <div className='login'>
            <Input/>
            <Button/>
          </div>
          <Background/>
        </div>
      </div>
    );
  }
}

export default Login;