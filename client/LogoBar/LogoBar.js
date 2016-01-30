import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';
import AppBar from 'material-ui/lib/app-bar';


class LogoBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="PICDROP"
          iconElementRight={<LogInOut label="LOGINOUT" />}
          style={{ backgroundColor: 'WHITE' }}
          titleStyle={{ color: 'DIMGREY', fontFamily: 'Abel, sans-serif' }}
          zDepth={0}
        />
      </div>
    );
  }
}

export default LogoBar;
