import React from 'react';

class Image extends React.Component({
  render: function(){
    return(
      <div>
        <ImageInfo />
        <ImageView />
      </div>
    )
  }
})

export default Image;
