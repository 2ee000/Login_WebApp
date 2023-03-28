import React from 'react';
// import axios from 'axios';

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
            <input type='email' placeholder='Email'
            name='userEmail'
            value={this.props.userEmail}
            onChange={this.props.onChange}/>
            <input type='password' placeholder='Password'
            name='userPassword'
            value={this.props.userPassword}
            onChange={this.props.onChange}/>
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