import React from 'react';
import SignupInput from '../components/SignupInput';
import '../styles/signup.css';


class Signup extends React.Component {
  render() {
    return (
      <div className='signup'>
        <div className='signup-app'>
          <div className='signup-header'>
            <div className='signup__logo'></div>
            <div className='signup__close'></div>
          </div>
          <SignupInput/>
        </div>
      </div>
    );
  }
}

export default Signup;