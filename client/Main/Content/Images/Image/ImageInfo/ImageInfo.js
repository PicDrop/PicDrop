import React from 'react';
import TagList from './TagList';
import AddTag from './AddTag';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';

const styles = {
  root: {
    minHeight: screen.height - 240,
    maxWidth: screen.width * 0.2,
    marginLeft: 10,
    marginTop: -10,
    paddingTop: 20
  }
};

const SUBHEADERSTYLE = { fontSize: '11px', lineHeight: '10px' };

class ImageInfo extends React.Component {

  render() {
    return (
      <Paper style={styles.root} z-index={1}>
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
              <AddTag
                dispatch={ this.props.dispatch }
                picId = { this.props.picId }
              />
              <TagList
                currentTags={ this.props.currentTags }
                picId = { this.props.picId }
              />
            </List>
          </div>
      </Paper>
    );
  }
}

ImageInfo.propTypes = {
  title: React.PropTypes.string.isRequired,
  folder: React.PropTypes.string.isRequired,
  originalUrl: React.PropTypes.string.isRequired,
  picId: React.PropTypes.string.isRequired,
  currentTags: React.PropTypes.array.isRequired,
};

export default ImageInfo;
