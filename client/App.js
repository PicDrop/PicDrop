import React from 'react';
import LogoBar from './LogoBar/LogoBar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class App extends React.Component{
  getChildContext(){
    return {
      muiTheme: ThemeManager.getMuiTheme(ThemeManager.types.LIGHT)
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <LogoBar />
        {this.props.children}
      </div>
    );
  }
}
App.childContextTypes= {
  muiTheme: React.PropTypes.object
}

export default App;
