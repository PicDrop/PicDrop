import React from 'react';
import profileActions from '../actions/profileActions';
import { reduxForm } from 'redux-form';

class Profile extends React.Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    console.log(this.props.setProfile)
    return (
      <form onSubmit={handleSubmit(this.props.setProfile)}>
        <div>User Profile</div>
        <label>Email</label>
        <input type="text" className="" {...email}/>
        <label>Password</label>
        <input type="password" className="" placeholder="New Password" {...password}/>
        <div>{email.error}, {password.error}</div>
        <button>Cancel</button>
        <button type="submit">Save</button>
      </form>
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
