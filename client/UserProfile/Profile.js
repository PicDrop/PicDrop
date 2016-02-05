import React from 'react';
import {reduxForm} from 'redux-form';
class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>User Profile</div>
        <label>Email</label>
        <input type="text" className=""/>
        <label>Password</label>
        <input type="password" className="" placeholder="New Password"/>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
}

export default Profile;
