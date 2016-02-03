import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import viewingActions from '../../../../../../../client/actions/viewingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Folders extends React.Component {
  render() {
    const selectedFolder = this.props.viewing.get('currentFolder');
    let keyCounter = 0;
    const folders = this.props.folders.map((folderObj, folderName) => {
      return (
        <ListItem
          className={selectedFolder === folderName ? 'selected' : ''}
          key={keyCounter++}
          primaryText={folderName}
          rightIcon={<ActionInfo />}
          onClick={() => this.props.viewingActions({ folderName, folderObj })}
        />
      );
    });
    return (
      <div>
        <h3>Folders</h3>
        <div>Current Selection: {selectedFolder}</div>
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
