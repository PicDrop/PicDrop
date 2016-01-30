import React from 'react';
import Images from './Navs/Images';
import Stream from './Navs/Stream';
import SearchBar from './Navs/SearchBar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Tabs>
           <Tab label="IMAGES" style={{ backgroundColor: 'GAINSBORO', color:'DIMGREY', fontWeight: '300', fontSize: '18px',  letterSpacing: '-0.5px' }}>
             <div>
             </div>
           </Tab>
           <Tab label="STREAM" style={{ backgroundColor: 'GAINSBORO', color:'DIMGREY', fontWeight: '300', fontSize: '18px',  letterSpacing: '-0.5px' }}>
             <div>
             </div>
           </Tab>
         </Tabs>
      </div>
    );
  }
}

export default Navbar;
