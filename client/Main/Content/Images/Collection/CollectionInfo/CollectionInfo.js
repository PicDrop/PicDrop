import React from 'react';
import Folders from './';
import Tags from './';

class CollectionInfo extends React.Component {
  render() {
    return (
      <div>CollectionInfo
        <Folders/>
        <Tags/>
      </div>
    );
  }
}

export default CollectionInfo;
