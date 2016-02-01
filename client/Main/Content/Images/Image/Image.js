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
            <ImageInfo info={ this.props.info } />
        </div>
        <div style={{ marginLeft: '250px' }}>
            <ImageView url={ this.props.url } />
        </div>
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
    // info: pic,
    // url: pic.get('originalUrl')
  };
};

export default connect(mapStateToProps)(Image);
