import React from 'react';
import Input from '../components/SignupInput';
import '../styles/signup.css';


class Signup extends React.Component {
  render() {
    return (
      <div className='signup'>
        <div className='signup-app'>
          <Input/>
        </div>
      </div>
    );
  }
}

export default Signup;