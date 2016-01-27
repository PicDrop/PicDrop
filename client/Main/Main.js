<<<<<<< 8505aef0c09041b1744d916190d6d42ac7638c8e
// Second level container, renders nav bar and third level container
=======
import React from 'react';
import NavBar from './NavBar/Navbar';
import Content from './Conent/Content';

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
>>>>>>> Store implemented with defaultState and masterReducer
