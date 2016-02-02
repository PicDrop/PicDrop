import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';


class ImageView extends React.Component {
  render() {
    return (
      <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '55%' }}>
          <Card>
            <CardMedia>
              <img src={ this.props.originalUrl } />
            </CardMedia>
            <CardActions>
              <FlatButton label="Delete" />
              <FlatButton label="Download" />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

ImageView.propTypes = {
  originalUrl: React.PropTypes.string.isRequired,
};

export default ImageView;
