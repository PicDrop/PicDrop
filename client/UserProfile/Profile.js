import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import profileActions from '../actions/profileActions';
import { reduxForm } from 'redux-form';

class Profile extends React.Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    console.log(this.props.setProfile)
    return (
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-2">
          <Paper zDepth={1}>
            <form onSubmit={handleSubmit(this.props.setProfile)}>
              <h4>Edit Profile</h4>
              <label>Email</label>
              <TextField
                defaultValue = "Default Email"
                {...email}
              />
              <label>Password</label>
              <TextField
                type="password"
                placeholder="New Password"
                {...password}
              />
              <div>{email.touched ? email.error : ''}, {password.touched ? password.error : ''}</div>
              <RaisedButton
                label="Cancel"
              />
              <RaisedButton
                label="Save"
                disabled={true}
                type="submit"
              />
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.email) {
    errors.email = 'Enter Email';
  }
  if(!values.password) {
    errors.password = 'Enter Pw';
  }

  return errors;
}

export default reduxForm({
  form: 'ProfileForm',
  fields: ['email', 'password'],
  validate
}, null, { setProfile: profileActions.setProfile, getProfile: profileActions.getProfile })(Profile);
