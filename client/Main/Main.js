import React from 'react';
import Navbar from './Navbar/Navbar';

class Main extends React.Component {
  componentWillMount() {
    if (!localStorage.getItem('pd.loggedIn')) {
      this.props.history.push({ pathname: '/splash' });
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
