import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class LoginOut extends React.Component {
  checkLogin() {
    if (localStorage.getItem('logedIn')) {
      return <FlatButton label="Logout" secondary={true} />;
    } else {
      return <FlatButton label="Login" primary={true} />;
    }
  }
  render() {
    return (
      <div className="col s8 right-align">
        <FlatButton label="LoginOut" secondary={true} style={ {height: 100} }/>
      </div>
    );
  }
}

export default LoginOut;
