import React from 'react';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';


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
