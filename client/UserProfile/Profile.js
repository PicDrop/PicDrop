import React from 'react';
import { reduxForm } from 'redux-form';
class Profile extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>User Profile</div>
        <label>Email</label>
        <input type="text" className=""/>
        <label>Password</label>
        <input type="password" className="" placeholder="New Password"/>
        <button>Cancel</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ProfileForm',
  fields: ['email', 'password']
})(Profile);
