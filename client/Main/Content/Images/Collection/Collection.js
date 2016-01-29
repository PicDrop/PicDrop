import React from 'react';
import CollectionInfo from './CollectionInfo/CollectionInfo';
import CollectionView from './CollectionView/CollectionView';

class Collection extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
          <CollectionInfo/>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
          <CollectionView/>
        </div>
      </div>
    );
  }
}

export default Collection;
