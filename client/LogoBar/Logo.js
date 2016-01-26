import React from 'react';
import Avatar from 'material-ui/lib/avatar';

class Logo extends React.Component{
  render(){
    return (
      <div className="box">
        <div className="row middle-xs">
          <Avatar src='assets/logo.svg' />
          <h2>PicDrop</h2>
        </div>
      </div>
    );
  }
}

export default Logo;
