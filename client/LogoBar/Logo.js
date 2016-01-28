import React from 'react';
import Avatar from 'material-ui/lib/avatar';

class Logo extends React.Component {
  render() {
    return (
      <div className="col s1 responsive-img">
        <img style={ {width: 75} }src="assets/logo.svg"/>
      </div>
    );
  }
}

export default Logo;
