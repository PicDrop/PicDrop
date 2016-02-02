import React from 'react';
import { connect } from 'react-redux';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';
import Immutable from 'immutable';


class Image extends React.Component {
  render() {
    return (
      <div>
        <div style={{ width: '250px', position: 'absolute' }}>
            <ImageInfo
              picId={ this.props.picId }
              folder={ this.props.folder }
              title={ this.props.title }
              originalUrl={ this.props.originalUrl }
              currentTags={ this.props.currentTags }
              />
        </div>
        <div style={{ marginLeft: '250px' }}>
            <ImageView originalUrl={ this.props.originalUrl } />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const userPics = state.userPics;
  const viewing = state.viewing;
  console.log('Viewing: ', viewing);
  const picId = viewing.get('currentImage', 0);
  const pic = userPics.get(picId);
  const originalUrl = pic.get('originalUrl');
  const folder = pic.get('folder');
  const title = pic.get('title');
  const currentTags = pic.get('tags');
  console.log('Current Tags:', currentTags);
  return {
    picId: pic,
    originalUrl: originalUrl,
    folder: folder,
    title: title,
    currentTags: currentTags,
  };
};


export default connect(mapStateToProps)(Image);
