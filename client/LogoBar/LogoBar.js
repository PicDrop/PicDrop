import React from 'react';
import LogInOut from './LogInOut';
import AppBar from 'material-ui/lib/app-bar';

class LogoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cursor: 'auto' };
    this.onClick = this.onClick.bind(this);
    this.startHover = this.startHover.bind(this);
    this.endHover = this.endHover.bind(this);
  }
  onClick() {
    this.props.history.push({ pathname: '/main/collection' });
  }
  startHover() {
    this.setState({ cursor: 'pointer' });
  }
  endHover() {
    this.setState({ cursor: 'auto' });
  }
  render() {
    const titleStyles = { color: 'DIMGREY', fontFamily: 'Abel, sans-serif', cursor: this.state.cursor };
    return (
      <div>
        <AppBar
          style={{ backgroundColor: 'WHITE' }}
          title={<span  onClick={ this.onClick }
                        onMouseEnter={ this.startHover }
                        onMouseLeave={ this.endHover }
                        style={ titleStyles }>PICDROP</span>}
          iconElementRight={<LogInOut history={this.props.history} />}
          // iconElementRight={<a href='/api/auth/google'>Google</a>}
          zDepth={0}
        />
      </div>
    );
  }
}

export default LogoBar;
