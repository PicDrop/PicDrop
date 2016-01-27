import React from 'react';
import Images from './Navs/Images';
import Streams from './Navs/Streams';
import SearchBar from './Navs/SearchBar';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Images />
        <Streams />
        <SearchBar />
      </div>
    );
  }
}

export default Navbar;
