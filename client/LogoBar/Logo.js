import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="row start-xs bottom-xs">
        <div className="col-xs-4">
          <div className="box">
            <img style={{ maxHeight: '50px' }} src="assets/logo.svg"/>
          </div>
        </div>
        <div className="col-xs-8">
          <div className="box">
            <span>PicDrop</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
