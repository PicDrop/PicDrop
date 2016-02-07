import React from 'react';
import Logo from './Logo';
import LogInOut from './LogInOut';
import ProfileBtn from './ProfileBtn';
import AppBar from 'material-ui/lib/app-bar';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';

const REDBORDERSTYLE = {borderStyle: 'dotted', borderColor: 'red'};


class LogoBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          style={{ backgroundColor: 'WHITE' }}
          title={<span style={{ color: 'DIMGREY', fontFamily: 'Abel, sans-serif' }}>PICDROP</span>}
          children={<div><ProfileBtn/><LogInOut history={this.props.history} /></div>}
          iconElementRight={<LogInOut history={this.props.history} />}
          // iconElementRight={<a href='/api/auth/google'>Google</a>}
          zDepth={0}
        />
      </div>
    );
  }

/*  render() {
    return (
        <Toolbar>
          <ToolbarGroup float="left">
            <ToolbarTitle
              style={{ color: 'DIMGREY', fontFamily: 'Abel, sans-serif' }}
              text="PICDROP"
            />
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <ProfileBtn/>
            <button>hghhghg</button>
          </ToolbarGroup>
        </Toolbar>
    );
  }*/
}

export default LogoBar;
