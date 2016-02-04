import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ImageLens from 'material-ui/lib/svg-icons/image/lens';
import viewingActions from '../../../../../../../client/actions/viewingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Folders extends React.Component {
  render() {
    const selectedFolder = this.props.viewing.get('currentFolder');
    let keyCounter = 0;
    let currentCount = 0;
    const folders = this.props.folders.map((folderObj, folderName) => {
      currentCount = folderObj.size;
      return (
        <ListItem
          className={selectedFolder === folderName ? 'selected' : ''}
          key={keyCounter++}
          primaryText={folderName}
          rightIcon={<span className="mdl-badge" data-badge={folderObj.size}></span>}
          onClick={() => this.props.viewingActions({ folderName, folderObj })}
        />
      );
    });
    return (
      <div>
        <h3>Folders</h3>
        <List>
          {folders}
        </List>
        <a href="#">Show All Folders</a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewing: state.viewing
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ viewingActions: viewingActions.selectFolder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Folders);
