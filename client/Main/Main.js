import React from 'react';
import Navbar from './Navbar/Navbar';

class Main extends React.Component {
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
