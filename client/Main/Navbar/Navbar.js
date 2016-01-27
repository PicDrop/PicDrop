import React from 'react';
import Images from './Navs/Images';
import Stream from './Navs/Stream';
import SearchBar from './Navs/SearchBar';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Images />
        <Stream />
        <SearchBar />
      </div>
    );
  }
}

export default Navbar;
