import React from 'react';

function SignupBackground() {
  return(
    <div className='signup__background'>
      <p>Welcome back</p>
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
            <p>Name</p>
            <input type='text' placeholder='Enter Full Name'/>
          </div>
          <div className='signup__input'>
            <p>Phone Number</p>
            <input type='number' placeholder='Enter Phone Number'/>
          </div>
          <div className='signup__input'>
            <p>Eamil address</p>
            <input type='email' placeholder='Enter Email Address'/>
          </div>
          <div className='signup__input'>
            <p>Password</p>
            <input type='password' placeholder='Enter Password'/>
          </div>
        </div>
        <div className='signup__extra'>
          <div className='signup__terms'>
            <p>By creating an account you agree to the <a href='#'>terms of use </a>and our <a href='#'>privacy policy.</a></p>
          </div>
          <div className='signup__button'>
            <button type='submit'>CTA</button>
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

export default Input;