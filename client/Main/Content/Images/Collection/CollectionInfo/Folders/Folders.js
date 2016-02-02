import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import viewingActions from '../../../../../../../client/actions/viewingActions';
/*import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';*/

class Folders extends React.Component {

  /*populateCurrentCollection(imageIds) {
    let newCollection = [];
    let newViewing = {};
    //this.props.viewingActions(folderObj)
    console.log(imageIds);
    console.log(this.props.viewing);
    imageIds.map((val, key) => {
      console.log(key);
      newCollection = newCollection.concat(key);
      //var currentCollection = this.props.viewing.get('currentCollection');
      /!*var a = this.props.viewing.set('currentCollection', newCollection);
      console.log( a.get('currentCollection'));*!/
      newViewing = this.props.viewing.set('currentCollection', newCollection);
    });
    //this.props.viewingActions(newViewing.get('currentCollection'));
  }*/
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
          onClick={() => this.props.dispatch(viewingActions.selectFolder({folderName, folderObj}))}
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

/*function mapStateToProps(state) {
  return {
    viewing: state.viewing
  };
}*/
/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ viewingActions: viewingActions }, dispatch);
};*/


export default Folders;
//export default connect(mapStateToProps)(Folders);
//export default connect(null, mapDispatchToProps)(Folders);
