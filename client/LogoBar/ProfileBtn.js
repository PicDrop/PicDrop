import React from 'react';
import { Link, browserHistory } from 'react-router';
import FlatButton from 'material-ui/lib/flat-button';

class ProfileBtn extends React.Component {
  render() {
    return (
      <Link to={`/profile`}>
        <FlatButton
          label="Profile"
          onTouchTap={ this.handleTouchTap }
          secondary={true}
        />
      </Link>
    );
  }
}

export default ProfileBtn;
