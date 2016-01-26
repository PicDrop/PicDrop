import React from 'react';


class ImageInfo extends React.Component({
  render: function(){
    return (
      <div>
        <Title />
        <Status />
        <Domain />
        <Folder />
        <Tags />
        <DeleteButton />
      </div>

    );
  }
})

export default ImageInfo
