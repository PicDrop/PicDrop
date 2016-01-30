import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const SUBHEADERSTYLE = {fontSize: '11px', lineHeight: '10px'};
const REDBORDERSTYLE = {borderStyle: 'dotted', borderColor: 'red'};

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


          <div id="metadata" style={ REDBORDERSTYLE }>
            <List subheader="Title" subheaderStyle={ SUBHEADERSTYLE } >
              <ListItem primaryText="Logged In" />
            </List>
            <List subheader="Status" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText="Saved to Google Drive" />
            </List>
            <List subheader="Domain" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText="Ffffound.com" />
            </List>
            <List subheader="Folder" subheaderStyle={ SUBHEADERSTYLE }>
              <ListItem primaryText="Brutalist" />
            </List>
            <List subheader="Tags maybe" subheaderStyle={ SUBHEADERSTYLE }>
              <TextField hintText="Tags..." />
            </List>
          </div>

          <div id="tags">
            <TextField hintText="Tags..." />
            <FlatButton label="Clean" />
            <FlatButton label="Login" />
            <FlatButton label="Materialize" />
          </div>

      </div>


    );
  }
}

export default ImageInfo
