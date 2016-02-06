import React from 'react';
import { connect } from 'react-redux';
import LogoBar from './LogoBar/LogoBar';
import appActions from './actions/appActions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem('pd.loggedIn')) {
      this.props.dispatch(appActions.setLoggedIn(true));
      this.props.history.push({ pathname: '/main/collection' });
    }else{
      this.props.hisotry.push({ pathname: '/splash' });
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


export default connect()(App);
