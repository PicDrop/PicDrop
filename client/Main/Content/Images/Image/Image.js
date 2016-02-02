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
            <ImageInfo picId={ this.props.picId } />
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
  console.log(viewing);
  const picId = viewing.get('currentImage', 0);
  const pic = userPics.get(picId);
  const originalUrl = pic.get('originalUrl');
  return {
    picId: pic,
    originalUrl: originalUrl
  };
};

export default connect(mapStateToProps)(Image);
