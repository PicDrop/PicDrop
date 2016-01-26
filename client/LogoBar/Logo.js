import React from 'react';
import Avatar from 'material-ui/lib/avatar';

class Logo extends React.Component{
  render(){
    return (
      <h3 className="col-xs-3" leftAvatar={<Avatar src='../../assets/logo.svg' />}>
        PicDrop
      </h3>
    );
  }
}

export default Logo;
