import React from 'react';
import { connect } from 'react-redux';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';
import Immutable from 'immutable';

class Image extends React.Component {
  render() {
    const userPics = this.props.userPics;
    //const viewing = this.props.viewing;
    const picId = this.props.params.imageId;
    const pic = userPics.get(picId);
    const originalUrl = pic.get('originalUrl');
    const folder = pic.get('folder');
    const title = pic.get('title');
    const currentTags = pic.get('tags');
    return (
      <div className="row">
        <div className="col-sm-4 col-md-3 col-lg-3 info-bar">
          <ImageInfo
            picId={ picId }
            folder={ folder }
            title={ title }
            originalUrl={ originalUrl }
            currentTags={ currentTags }
            history={ this.props.history }
          />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-9 image-collection">
          <ImageView originalUrl={ originalUrl } />
        </div>
      </div>
    );
/*    return (
      <div>
        <div style={{ width: '250px', position: 'absolute' }}>
          <ImageInfo
            picId={ picId }
            folder={ folder }
            title={ title }
            originalUrl={ originalUrl }
            currentTags={ currentTags }
            history={ this.props.history }
          />
        </div>
        <div style={{ marginLeft: '250px' }}>
          <ImageView originalUrl={ originalUrl } />
        </div>
      </div>
    );*/

/*    return (
      <div>
        <div style={{ width: '250px', position: 'absolute' }}>
            <ImageInfo
              picId={ this.props.picId }
              folder={ this.props.folder }
              title={ this.props.title }
              originalUrl={ this.props.originalUrl }
              currentTags={ this.props.currentTags }
              history={ this.props.history }
              />
        </div>
        <div style={{ marginLeft: '250px' }}>
            <ImageView originalUrl={ this.props.originalUrl } />
        </div>
      </div>

    );*/

  }
}

const mapStateToProps = (state) => {
  return {
    userPics: state.userPics,
    viewing: state.viewing
  };
};

/*const mapStateToProps = (state) => {
  const userPics = state.userPics;
  const viewing = state.viewing;
  const picId = viewing.get('currentImage', 0);
  const pic = userPics.get(picId);
  const originalUrl = pic.get('originalUrl');
  const folder = pic.get('folder');
  const title = pic.get('title');
  const currentTags = pic.get('tags');
  return {
    picId: pic,
    originalUrl: originalUrl,
    folder: folder,
    title: title,
    currentTags: currentTags,
  };
};*/


export default connect(mapStateToProps)(Image);
