import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';

class ImageView extends React.Component({
  render: function(){
    return (
      <div>
        <FlatButton style={border: 'solid', border-width: 'thin'} label="Download" />
        <Paper style={height: 500, width: 500, margin: 20, textAlign: 'center', display: 'inline-block'} zDepth={1}/>
      </div>

    );
  }
})

export default ImageView
