import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import viewingActions from '../../../../../../../client/actions/viewingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Tags extends React.Component {
  render() {
    let keyCounter = 0;
    const tags = this.props.tags.map((tagObj, tagName) => {
      return (
        <ListItem
          key={keyCounter++}
          primaryText={tagName}
          rightIcon={<ActionInfo />}
          onClick={() => this.props.viewingActions({ tagName, tagObj })}
        />
      );
    });
    return (
      <div>
        <h3>Tags</h3>
        <List>
          {tags}
        </List>
        <a href="#">Show All Tags</a>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ viewingActions: viewingActions.selectTag }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tags);

/*class Tags extends React.Component {
  render() {
    var keyCounter = 0;
    let tags = this.props.tags.map((tagObj, tagName) => {
      console.log(tagObj, tagName);
      //let itemCount = tagObj.size;
      //return (<li key={keyCounter++}>{tagName} {itemCount}</li>);
      //return (<li key={keyCounter++}>{tagName}</li>);
      return (<ListItem  key={keyCounter++} primaryText={tagName} rightIcon={<ActionInfo />} />);
    });
    return (
      <div>
        <h3>Tags</h3>
        <List>
          {tags}
        </List>
        <a href="#">Show All Tags</a>
      </div>
    );
  }
}

export default Tags;*/
