import React from 'react';
import Logo from './Logo';
import LoginOut from './LoginOut';

class LogoBar extends React.Component {
  render() {
    return (
      <div className="row bottom-xs">
        <div className="col-xs-2">
          <Logo />
        </div>
        <div className="col-xs-10">
          <LoginOut />
        </div>
      </div>
    );
  }
}

export default LogoBar;
