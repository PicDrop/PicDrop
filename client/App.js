import React from 'react';
import { connect } from 'react-redux';
import LogoBar from './LogoBar/LogoBar';
import appActions from './actions/appActions';
import MyRawTheme from './theme/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }
  componentWillMount() {
    if (localStorage.getItem('pd.loggedIn')) {
      this.props.dispatch(appActions.setLoggedIn(true));
      this.props.history.push({ pathname: '/main/collection' });
    }else{
      this.props.history.push({ pathname: '/splash' });
    }
  }
  render() {
    return (
      <div>
        <LogoBar history={ this.props.history } />
        { this.props.children }
      </div>
    );
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default connect()(App);
