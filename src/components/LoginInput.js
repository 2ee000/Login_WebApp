import React from 'react';
import axios from 'axios';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: ''
    };
    this.loginInput = this.loginInput.bind(this);
  }

  loginAxios = () => {
    axios.get("http://43.201.10.122:12044/user/login", {
      user_email: this.state.userEmail,
      password: this.state.userPassword,
    })
    .then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
  }

  async loginInput(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  render() {
    return (
      <div className='login-form'>
        <p>Welcome back</p>
        <div className='login__text'>
          <div className='login__input'>
            <input type='email' placeholder='Email'
            name='userEmail'
            value={this.state.userEmail}
            onChange={this.loginInput}/>
            <input type='password' placeholder='Password'
            name='userPassword'
            value={this.state.userPassword}
            onChange={this.loginInput}/>
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