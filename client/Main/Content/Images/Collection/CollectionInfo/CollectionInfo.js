import React from 'react';
import Folders from './Folders/Folders';
import Tags from './Tags/Tags';

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
