import React from 'react';
import { browserHistory } from 'react-router';
import Images from './Navs/Images';
import Stream from './Navs/Stream';
import SearchBar from './Navs/SearchBar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


function handleActive(tab) {
  this.props.history.push({ pathname: tab.props.route } );
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Tabs style={{marginBottom: '10px'}}>
          <Tab
            label="IMAGES"
            style={{ backgroundColor: '#F6F6F6', color:'#5A5A5A', fontWeight: '300', fontSize: '18px',  letterSpacing: '-0.5px' }}
            route="/main/collection"
            onActive={handleActive.bind(this)}
          >
            <div></div>
          </Tab>
          <Tab
            label="STREAM"
            style={{ backgroundColor: '#F6F6F6', color:'#5A5A5A', fontWeight: '300', fontSize: '18px',  letterSpacing: '-0.5px' }}
            route="/main/stream"
            onActive={handleActive.bind(this)}
          >
            <div></div>
          </Tab>
         </Tabs>
      </div>
    );
  }
}

export default Navbar;
