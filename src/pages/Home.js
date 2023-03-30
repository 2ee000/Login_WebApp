import React, { Component } from 'react';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(window.localStorage.getItem('token') === null) {
      window.location.replace('/login')
    } else {
      // 유저 정보를 요청
    }
  }

  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    );
  }
}

export default Home;