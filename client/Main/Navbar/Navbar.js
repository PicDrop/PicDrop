import React from 'react';
import Images from './Navs/Images';
import Stream from './Navs/Stream';
import SearchBar from './Navs/SearchBar';

class Navbar extends React.Component {
  render() {
    return (
      <div className="row middle-xs">
        <div className="col-xs-1 center-xs">
          <Images />
        </div>
        <div className="col-xs-1">
          <Stream />
        </div>
        <div className="col-xs-10 end-xs">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Navbar;
