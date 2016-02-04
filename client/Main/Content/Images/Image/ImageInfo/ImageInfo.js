import React from 'react';
import TagList from './TagList';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const SUBHEADERSTYLE = { fontSize: '11px', lineHeight: '10px' };
const REDBORDERSTYLE = { borderStyle: 'dotted', borderColor: 'red' };

class ImageInfo extends React.Component {

  addTag() {
    //take current tags
    //check for existance of this tag
      //if exists add picId
        //pass that updated tag object
      //if doesn't exist
        //build new tag object
        //pass new tag object to tagsAction.addTag


    //take current tags
    //merge tagname with id
      //pass all tags to tagsAction.addTag
  }


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
              <ListItem primaryText={ this.props.title } disabled="true" />
            </List>
            <List subheader="Status" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText="Saved to Google Drive" disabled="true" />
            </List>
            <List subheader="Domain" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText={ this.props.originalUrl } disabled="true" />
            </List>
            <List subheader="Folder" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText={ this.props.folder } disabled="true" />
            </List>
            <List subheader="Tags" subheaderStyle={ SUBHEADERSTYLE } >
              <form onSubmit={this.submitForm}>
              <TextField hintText="Add a tag" /><br/>
                <FlatButton
                  label="Add Tag" type="submit" hoverColor="WHITE" disableTouchRipple="true"
                />
              </form>
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
