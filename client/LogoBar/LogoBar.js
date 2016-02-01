import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';
import AppBar from 'material-ui/lib/app-bar';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';


const REDBORDERSTYLE = {borderStyle: 'dotted', borderColor: 'red'};

class LogoBar extends React.Component {
  render() {
    return (
      <AppBar
        style={{ backgroundColor: 'WHITE' }}
        title={<span style={{ color: 'DIMGREY', fontFamily: 'Abel, sans-serif' }}>PICDROP</span>}
        iconElementRight={<LogInOut />}
        zDepth={0}
      />

    );
  }
}

export default LogoBar;
