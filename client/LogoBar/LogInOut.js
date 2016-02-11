import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/lib/flat-button';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import AuthForm from './Auth/AuthForm';
import LogoBarBtn from './LogoBarBtn';
import appActions from '../actions/appActions';

class LoginOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAuthOpen = this.handleAuthOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
  }
  handleAuthOpen(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }
  handleLogout() {
    localStorage.removeItem('pd.token');
    localStorage.removeItem('pd.loggedIn');
    console.log(this.props.history);
    this.props.dispatch(appActions.setLoggedIn(false));
    this.props.history.push({ pathname: '/splash' });
  }
  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  checkLogin() {
    if (this.props.loggedIn) {
      return (
        <span>
          <LogoBarBtn label="profile" link="/profile"/>
          <LogoBarBtn label="about" link="/about"/>
          <FlatButton onTouchTap={ this.handleLogout } label="Logout" secondary={true} />
        </span>);
    } else {
      return (
        <span>
          <LogoBarBtn label="about" link="/about"/>
          <FlatButton onTouchTap={ this.handleAuthOpen } label="Login" secondary={true} />
        </span>
      );
    }
  }
  render() {
    return (
      <div className="box end-xs">
        { this.checkLogin() }
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{"horizontal":"right","vertical":"bottom"}}
          targetOrigin={{"horizontal":"right","vertical":"top"}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={{"padding":20}}>
            <AuthForm dispatch={ this.props.dispatch }submissionType={'login'} history={this.props.history} onSubmit={this.handleRequestClose} />
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.app.get('loggedIn'),
  };
};

export default connect(mapStateToProps)(LoginOut);
