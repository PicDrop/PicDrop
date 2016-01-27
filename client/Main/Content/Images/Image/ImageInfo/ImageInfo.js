import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';


class ImageInfo extends React.Component({
  render: function(){
    return (
      <div>
        <div>
          <FlatButton style={border: 'solid', border-width: 'thin'} label="Download" />
        </div>
        <div id="metadata">
          title
          status
          saved to drive
          domain
          folder
        </div>
        <div id="tags">
          <TextField hintText="Tags..." underlineFocusStyle={{borderColor: #ED1E79}} />
          <FlatButton label="Clean" />
          <FlatButton label="Login" />
          <FlatButton label="Materialize" />
        </div>
        <div></div>


      </div>







    );
  }
})

export default ImageInfo
