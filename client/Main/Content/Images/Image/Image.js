import React from 'react';
import { connect } from 'react-redux';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageView from './ImageView/ImageView';
import Immutable from 'immutable';


class Image extends React.Component{
  render() {
    return (
      <div className="row" style={{ borderStyle: 'dotted', borderColor: 'blue' }}>
        <div className="col-sm-2 col-md-2 col-lg-2" style={{ borderStyle: 'dotted', borderColor: 'blue' }}>
            <ImageInfo info={ this.props.info } />
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10" style={{ borderStyle: 'dotted', borderColor: 'blue' }}>
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
