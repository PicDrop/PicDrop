import React from 'react';
import Logo from './Logo';
import LoginOut from './LoginOut';

class LogoBar extends React.Component{
  render() {
    return (
      <div className="row middle-xs">
        <div className='col-xs-3'>
          <Logo />
        </div>
        <div className='col-xs-3 col-xs-offset-6 end-xs'>
          <LoginOut className="end-xs col-xs-offset-6 col-xs-3" />
        </div>
      </div>
    );
  }
}

export default LogoBar;
