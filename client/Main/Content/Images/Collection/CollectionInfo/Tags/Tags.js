import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import viewingActions from '../../../../../../../client/actions/viewingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Tags extends React.Component {
  render() {
    const selectedTags = this.props.viewing.get('currentTags');
    let keyCounter = 0;
    const tags = this.props.tags.map((tagObj, tagName) => {
      return (
        <ListItem
          className={selectedTags.has(tagName) ? 'selected' : ''}
          key={keyCounter++}
          primaryText={tagName}
          rightIcon={<span className="mdl-badge" data-badge={tagObj.size}></span>}
          onClick={() => this.props.viewingActions({ tagName, tagObj })}
        />
      );
    });
    return (
      <div>
        <div className="sidebar-header">
          <i className="material-icons">filter_frames</i>
          <div>Tags</div>
        </div>
        <List>
          {tags}
        </List>
        <a className="sidebar-link" href="#">
          <i className="material-icons">expand_more</i>
          <div>Show All</div>
        </a>
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
  return bindActionCreators({ viewingActions: viewingActions.selectTag }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

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
