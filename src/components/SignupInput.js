import React from 'react';

function SignupBackground() {
  return(
    <div className='signup__background'>
      <div className='signup__background-text'>
          <p>Welcome back</p>
          <p>Let’s be honest, it’s hard to fit working out into our busy schedule. With Trainerz you do less work and see more results.</p>
      </div>
      <div className='signup__background-img'></div>
    </div>
  )
}

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='signup-wrapper'>
        <SignupBackground/>
        <div className='signup-form'>
          <div className='signup__input'>
            <div className='signup__input-form'>
              <div className='signup__input-type'>
                <p>Name</p>
                <input type='text' placeholder='Enter Name'/>
              </div>
              <div className='signup__input-type'>
                <p>Password</p>
                <input type='password' placeholder='Enter Password'/>
              </div>
            </div>
            <div className='signup__input-form'>
              <div className='signup__input-type'>
                <p>Eamil address</p>
                <input type='email' placeholder='Enter Email Address'/>
              </div>
              <div className='signup__input-type'>
                <p>Confirm Password</p>
                <input type='password' placeholder='Enter Confirm Password'/>
              </div>
            </div>
          </div>
          <button type='submit'>Sign up</button>
        </div>
      </div>
    )
  }
}

export default Input;