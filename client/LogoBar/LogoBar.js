import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';

class LogoBar extends React.Component {
  render() {
    return (
      <div className="row bottom-xs">
        <div className="col-xs-2">
          <Logo />
        </div>
        <div className="col-xs-10">
          <LogInOut />
        </div>
      </div>
    );
  }
}

export default LogoBar;
