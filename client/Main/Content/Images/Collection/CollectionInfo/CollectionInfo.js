import React from 'react';
import Folders from './Folders/Folders';
import Tags from './Tags/Tags';
import Paper from 'material-ui/lib/paper';

const styles = {
  root: {
    minHeight: screen.height - 240,
    //width: screen.width * 0.2,
    maxWidth: screen.width * 0.2,
    marginLeft: 10,
    marginTop: -10,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  }
};

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
      <Paper style={styles.root} zDepth={1}>
        <Folders populateCurrentCollection={this.populateCurrentCollection} folders={this.props.folders}/>
        <Tags populateCurrentCollection={this.populateCurrentCollection} tags={this.props.tags}/>
      </Paper>
    );
  }
}

export default CollectionInfo;
