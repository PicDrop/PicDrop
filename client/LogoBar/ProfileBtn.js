import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class ProfileBtn extends React.Component {
  render() {
    return (
      <FlatButton
        label="Profile"
        onTouchTap={ this.handleTouchTap }
      />
    );
  }
}

export default ProfileBtn;
