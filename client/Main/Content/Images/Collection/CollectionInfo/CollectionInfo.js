import React from 'react';
import Folders from './Folders/Folders';
import { connect } from 'react-redux';
import Tags from './Tags/Tags';
import Paper from 'material-ui/lib/paper';

class CollectionInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
          <Paper zDepth={1}>
            <Folders folders={this.props.folders}/>
            <Tags tags={this.props.tags}/>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    'folders': state.folders,
    'tags': state.tags
  }
}

export default connect(mapStateToProps)(CollectionInfo);
