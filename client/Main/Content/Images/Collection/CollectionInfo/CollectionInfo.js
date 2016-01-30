import React from 'react';
import Folders from './Folders/Folders';
import Tags from './Tags/Tags';
import Paper from 'material-ui/lib/paper';

class CollectionInfo extends React.Component {
  render() {
    return (
      <Paper zDepth={1}>
        <Folders viewingActions={this.props.viewingActions} folders={this.props.folders}/>
        <Tags tags={this.props.tags}/>
      </Paper>
    );
  }
}

export default CollectionInfo;
