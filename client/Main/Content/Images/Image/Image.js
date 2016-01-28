import React from 'react';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';


class Image extends React.Component{
  render(){
    return(
      <div>
        <ImageInfo />
        <ImageView />
      </div>
    )
  }
}

export default Image;
