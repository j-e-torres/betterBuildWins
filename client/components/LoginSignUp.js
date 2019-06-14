import React, { Component } from 'react';

class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return <div />;
  }
}
export default LoginSignUp;
