import React from 'react';
import { connect } from 'react-redux';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';
import Immutable from 'immutable';


class Image extends React.Component{
  render() {
    return (
      <div>
        <ImageInfo info={ this.props.info } />
        <ImageView url={ this.props.url } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userPics = state.userPics;
  const viewing = state.viewing;
  const picId = viewing.getIn(['currentViewing', 0]);
  const pic = userPics.get(picId); 
  return {
    info: pic,
    url: pic.get('originalUrl')
  };
};

export default connect(mapStateToProps)(Image);
