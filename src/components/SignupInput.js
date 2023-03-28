import React from 'react';
import axios from 'axios';
//import { redirect } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';

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
      userName: '',
      userPhoneNumber: '',
      userEmail: '',
      userPassword: ''
    };
    //this.props = props;
    this.signupInput = this.signupInput.bind(this);
    this.signupButton = this.signupButton.bind(this);
    this.signupAxios = this.signupAxios.bind(this);
    this.signupError = this.signupError.bind(this);
    this.signupProps = this.signupProps.bind(this);
  }

  signupAxios() {
    axios.post("http://15.164.100.35:12044/user/signup",{
      user_name: this.state.userName,
      user_email: this.state.userEmail,
      password: this.state.userPassword,
      phone_number: this.state.userPhoneNumber,
      })
      .then(function (response) {
        this.signupProps();
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
  }

  signupProps() {
    this.props.history.push('/login');

  }

  signupError() {
    if(this.state.userName === '') {
      window.alert('Please enter your name!');
      return;
    }
    else if(this.state.userPhoneNumber === '') {
      window.alert('Please enter your phone number!');
      return;
    }
    else if(this.state.userEmail === '') {
      window.alert('Please enter your email!');
      return;
    }
    else if(this.state.userPassword === '') {
      window.alert('Please enter your password!');
      return;
    }
    else {
      this.signupAxios();
    }
  }

  async signupInput(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  signupButton() {
    console.log(this.state);
    this.signupError();
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
            onChange={this.signupInput}/>
          </div>
          <div className='signup__input'>
            <p>Phone Number</p>
            <input type='number' placeholder='Enter Phone Number'
            name='userPhoneNumber'
            value={this.state.userPhoneNumber}
            onChange={this.signupInput}/>
          </div>
          <div className='signup__input'>
            <p>Eamil address</p>
            <input type='email' placeholder='Enter Email Address'
            name='userEmail'
            value={this.state.userEmail}
            onChange={this.signupInput}/>
          </div>
          <div className='signup__input'>
            <p>Password</p>
            <input type='password' placeholder='Enter Password' minLength={'8'}
            name='userPassword'
            value={this.state.userPassword}
            onChange={this.signupInput}/>
          </div>
        </div>
        <div className='signup__extra'>
          <div className='signup__terms'>
            <p>By creating an account you agree to the <a href='#'>terms of use </a>and our <a href='#'>privacy policy.</a></p>
          </div>
          <div className='signup__button'>
            <button onClick={this.signupButton} type='submit'>CTA</button>
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