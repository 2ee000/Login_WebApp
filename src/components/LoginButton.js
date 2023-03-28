import React from 'react';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.loginButton = this.loginButton.bind(this);
    this.googleButton = this.googleButton.bind(this);
  }

  loginButton() {
    this.props.loginError();
    this.props.loginAxios();
    console.log('loginButton Click!');
  }

  googleButton() {
    console.log('googleButton Click!');
  }

  render() {
    return (
      <div className='login__button'>
        <div className='login__button-wrapper'>
          <button onClick={this.loginButton} type='submit'>CTA</button>
          <button onClick={this.googleButton}><p></p>Sign in with google</button>
        </div>
        <a href='/signup'>Don't have an account? Sign up</a>
      </div>
    )
  }
}

export default LoginButton;