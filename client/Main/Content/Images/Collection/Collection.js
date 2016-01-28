import React from 'react';
import CollectionInfo from './CollectionInfo/CollectionInfo';
import CollectionView from './CollectionView/CollectionView';
import Paper from 'material-ui/lib/paper';
class Collection extends React.Component {
  render() {
    return (
      <div>
        <CollectionInfo/>
        <CollectionView/>
      </div>
    );
  }
}

export default Collection;
