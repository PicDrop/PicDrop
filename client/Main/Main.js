import React from 'react';
import NavBar from './NavBar/Navbar';
import Content from './Content/Content';

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default Main;
