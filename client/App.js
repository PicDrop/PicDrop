import React from 'react';
import LogoBar from './LogoBar/LogoBar';

class App extends React.Component{
  render(){
    return (
      <LogoBar />
      {this.props.children}
    );
  }
}

export default App;
