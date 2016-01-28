import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="row start-xs bottom-xs">
          <div className="col-xs-4">
            <div className="box">
              <img src="assets/logo.svg"/>
            </div>
          </div>
          <div className="col-xs-8">
            <div className="box">
              <h2>PicDrop</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
