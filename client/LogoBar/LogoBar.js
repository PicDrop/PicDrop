import React from 'react';
import Logo from './Logo';
import Name from './Name';
import LoginOut from './LoginOut';

class LogoBar extends React.Component {
  render() {
    return (
      <div className="row">
          <Logo />
          <Name />
          <LoginOut />
      </div>
    );
  }
}

export default LogoBar;
