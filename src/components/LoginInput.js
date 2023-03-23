import React from 'react';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='login-form'>
        <p>Welcome back</p>
        <div className='login__text'>
          <div className='login__input'>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
          </div>
          <div className='login__forgot'>
            <a href='#'>Forgot password</a>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginInput;