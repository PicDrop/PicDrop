import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { reduxForm } from 'redux-form';

class AuthForm extends React.Component{
  render(){
    return (
      <div>
        <h4>Log In</h4>
        <TextField
          hintText="Email"
          floatingLabelText="Email:"
        />
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password:"
        />
        <RaisedButton onTouchTap={this.props.onSubmit} label="Login" primary={true} style={{"margin":12}} />
      </div>
    );
  }
}

export default AuthForm;
