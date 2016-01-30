import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';
import AppBar from 'material-ui/lib/app-bar';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';

const REDBORDERSTYLE = {borderStyle: 'dotted', borderColor: 'red'};


class LogoBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="PICDROP"
          iconElementRight={<LogInOut label="LOGINOUT" history={this.props.history}/>}
          style={{ backgroundColor: 'WHITE' }}
          titleStyle={{ color: 'DIMGREY', fontFamily:'Roboto', fontWeight:'bold' }}
          zDepth={0}
        />
      </div>
    );
  }
}

export default LogoBar;
