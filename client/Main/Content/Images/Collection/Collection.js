import React from 'react';
import CollectionInfo from './';
import CollectionView from './';

class Collection extends React.Component {
  render() {
    return (
      <div>Collection
        <CollectionInfo/>
        <CollectionView/>
      </div>
    );
  }
}

export default Collection;
