import React from 'react';
import axios from 'axios';

function SignupBackground() {
  return(
    <div className='signup__background'>
      <p>Welcome back</p>
      <div className='signup__background-img'></div>
    </div>
  )
}


class SignupInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      userPhoneNumber: null,
      userEmail: null,
      userPassword: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  async handleChange(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  handleButton() {
    console.log('button');
  }

  render() {
    return (
      <div className='signup-wrapper'>
        <SignupBackground/>
        <div className='signup-form'>
          <div className='signup__input'>
            <p>Name</p>
            <input type='text' placeholder='Enter Full Name'
            name='userName'
            value={this.state.userName}
            onChange={this.handleChange}/>
          </div>
          <div className='signup__input'>
            <p>Phone Number</p>
            <input type='number' placeholder='Enter Phone Number'
            name='userPhoneNumber'
            value={this.state.userPhoneNumber}
            onChange={this.handleChange}/>
          </div>
          <div className='signup__input'>
            <p>Eamil address</p>
            <input type='email' placeholder='Enter Email Address'
            name='userEmail'
            value={this.state.userEmail}
            onChange={this.handleChange}/>
          </div>
          <div className='signup__input'>
            <p>Password</p>
            <input type='password' placeholder='Enter Password'
            name='userPassword'
            value={this.state.userPassword}
            onChange={this.handleChange}/>
          </div>
        </div>
        <div className='signup__extra'>
          <div className='signup__terms'>
            <p>By creating an account you agree to the <a href='#'>terms of use </a>and our <a href='#'>privacy policy.</a></p>
          </div>
          <div className='signup__button'>
            <button onClick={this.handleButton} type='submit'>CTA</button>
            <div className='signup__login'>
              <p>Alerady have an account?&nbsp;</p>
              <a href='#'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupInput;