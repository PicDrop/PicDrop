import React from 'react';
import Folders from './Folders/Folders';
import Tags from './Tags/Tags';
import Paper from 'material-ui/lib/paper';

class CollectionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.populateCurrentCollection = this.populateCurrentCollection.bind(this);
  }
  populateCurrentCollection(imageIds) {
    var newList = new List();
    imageIds.map((val, key) => {
      newList = newList.push(key);
    });
    return state.set('currentCollection', newList);
  }

  render() {
    return (
      <Paper zDepth={1}>
        <Folders populateCurrentCollection={this.populateCurrentCollection} folders={this.props.folders}/>
        <Tags populateCurrentCollection={this.populateCurrentCollection} tags={this.props.tags}/>
      </Paper>
    );
  }
}

export default CollectionInfo;
