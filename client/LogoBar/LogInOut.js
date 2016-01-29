import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import AuthForm from './Auth/AuthForm';

class LoginOut extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleTouchTap(event) {
    console.log('inside touchtap');
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }
  handleRequestClose() {
    this.setState({
      open: false
    });
  }
  checkLogin() {
    if (localStorage.getItem('logedIn')) {
      return <FlatButton label="Logout" secondary={true} />;
    } else {
      return <FlatButton label="Login" primary={true} />;
    }
  }
  render() {
    return (
      <div className="box end-xs">
        <FlatButton onTouchTap={this.handleTouchTap} label="LoginOut" secondary={true} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{"horizontal":"right","vertical":"bottom"}}
          targetOrigin={{"horizontal":"right","vertical":"top"}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={{"padding":20}}>
            <AuthForm onSubmit={this.handleRequestClose} />
          </div>
        </Popover>
      </div>
    );
  }
}

export default LoginOut;
