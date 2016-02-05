import React from 'react';
import TagList from './TagList';
import AddTag from './AddTag';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const SUBHEADERSTYLE = { fontSize: '11px', lineHeight: '10px' };
const REDBORDERSTYLE = { borderStyle: 'dotted', borderColor: 'red' };

class ImageInfo extends React.Component {

  render() {
    return (
      <div>
          <div>
            <FlatButton
              onTouchTap={ this.props.history.push.bind(this, { pathname: '/main/collection' }) }
              label="Back"
              hoverColor="WHITE"
              disableTouchRipple={true}
            />
          </div>
          <div id="metadata">
            <List subheader="Title" subheaderStyle={ SUBHEADERSTYLE } >
              <ListItem primaryText={ this.props.title } disabled={true} />
            </List>
            <List subheader="Status" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText="Saved to Google Drive" disabled={true} />
            </List>
            <List subheader="Domain" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText={ this.props.originalUrl } disabled={true} />
            </List>
            <List subheader="Folder" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText={ this.props.folder } disabled={true} />
            </List>
            <List subheader="Tags" subheaderStyle={ SUBHEADERSTYLE } >
              <AddTag />
              <TagList currentTags={ this.props.currentTags } />
            </List>
          </div>
      </div>
    );
  }
}

ImageInfo.propTypes = {
  title: React.PropTypes.string.isRequired,
  folder: React.PropTypes.string.isRequired,
  originalUrl: React.PropTypes.string.isRequired,
};

export default ImageInfo;
