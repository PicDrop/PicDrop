import React from 'react';
import Folders from './Folders/Folders';

import Tags from './Tags/Tags';
import Paper from 'material-ui/lib/paper';

class CollectionInfo extends React.Component {
  render() {
    return (
      <Paper zDepth={1}>
        <Folders folders={this.props.folders}/>
        <Tags tags={this.props.tags}/>
      </Paper>
    );
  }
}

/*const mapStateToProps = (state) => {
  console.log(state);
  return {
    'folders': state.folders,
    'tags': state.tags
  }
}

export default connect(mapStateToProps)(CollectionInfo);*/
export default CollectionInfo;
