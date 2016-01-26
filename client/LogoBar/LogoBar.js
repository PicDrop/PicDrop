import React from 'react';
import Logo from './Logo';
import LoginOut from './LoginOut';

class LogoBar extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Logo />
          <LoginOut />
        </div>
      </div>
    );
  }
}

export default LogoBar;
