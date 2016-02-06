import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import profileActions from '../actions/profileActions';
import { reduxForm } from 'redux-form';

const styles = {
  root: {
    marginTop: 10,
    marginLeft: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    minWidth: 300,
    padding: 25,
  },
  label: {
    margin: 15,
  },
  emailLabel: {
    margin: 15,
    paddingRight: 29
  },
  textField: {
    maxWidth: 300,
    minWidth: 300,
  }
};

class Profile extends React.Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    console.log(this.props.setProfile)
    return (
      <div className="row">
        <div className="col">
          <Paper style={styles.root} zDepth={1}>
            <form onSubmit={handleSubmit(this.props.setProfile)}>
              <h4>Edit Profile</h4>
              <div className="row">
                <label style={styles.emailLabel}>Email</label>
                <TextField
                  style={styles.textField}
                  defaultValue = "Default Email"
                  {...email}
                />
              </div>
              <div className="row">
                <label style={styles.label}>Password</label>
                <TextField
                  style={styles.textField}
                  type="password"
                  placeholder="New Password"
                  {...password}
                />
              </div>
              <div>{email.touched ? email.error : ''}, {password.touched ? password.error : ''}</div>
              <div className="row">
                <RaisedButton
                  label="Cancel"
                />
                <RaisedButton
                  label="Save"
                  disabled={true}
                  type="submit"
                />
              </div>
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
