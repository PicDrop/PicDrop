import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
//import { viewingActions } from '../../../../../../../client/actions/viewingActions';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Folders extends React.Component {
  render() {
    var keyCounter = 0;
    let folders = this.props.folders.map((folderObj, folderName) => {
      console.log(folderObj, folderName);
      //let itemCount = folderObj.size;
      //return (<li key={keyCounter++}>{folderName} {itemCount}</li>);
      return (
        <ListItem
          key={keyCounter++}
          primaryText={folderName}
          rightIcon={<ActionInfo />}
          onClick={() => this.props.viewingActions(folderObj)}
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

//const mapDispatchToProps = (dispatch) => {
//  return bindActionCreators({ selectFolder }, dispatch);
//};


export default Folders;
//export default connect(null, mapDispatchToProps)(Folders);
