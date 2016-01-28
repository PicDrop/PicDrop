import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';


class ImageInfo extends React.Component {
  addTag(){
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
          <FlatButton style={{ border: 'solid thin' }} label="Download" />
        </div>
        <div id="metadata">
          title
          status
          saved to drive
          domain
          folder
        </div>
        <div id="tags">
          <TextField hintText="Tags..." />
          <FlatButton label="Clean" />
          <FlatButton label="Login" />
          <FlatButton label="Materialize" />
        </div>
        <div></div>


      </div>


    );
  }
}

export default ImageInfo
