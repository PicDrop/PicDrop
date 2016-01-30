import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';
import AppBar from 'material-ui/lib/app-bar';
<<<<<<< 04bc5a597a8dd39407c00fbd42a7b9af8e80217f
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';


const REDBORDERSTYLE = {borderStyle: 'dotted', borderColor: 'red'};
=======

>>>>>>> Changed logobar and navbar to material ui components

class LogoBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          style={{ backgroundColor: 'WHITE' }}
          title={<span style={{ color: 'DIMGREY', fontFamily: 'Abel, sans-serif' }}>PICDROP</span>}
          iconElementRight={<LogInOut history={this.props.history} />}
          zDepth={0}
        />
      </div>
    );
  }
}

export default LogoBar;
