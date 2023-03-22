import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='login__button'>
        <div className='login__button-wrapper'>
          <button type='submit'>CTA</button>
          <button><p></p>Sign in with google</button>
        </div>
        <a href='#'>Don't have an account? Sign up</a>
      </div>
    )
  }
}

export default Button;