import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';

const styles = {
  root: {
    marginTop: -10,
    marginLeft: -14,
    //maxWidth: screen.width * 0.8,
    //minWidth: screen.width * 0.8,
    backgroundColor: '#E9E9F4',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //minWidth: 965,
    minHeight: screen.height - 240,
    padding: 21,
  },
  card: {
    maxWidth: 670,
    maxHeight: 730,
/*    minWidth: 220,
    minHeight: 300,*/
    margin: 16,
  },
  image: {
    maxWidth: 650,
    maxHeight: 650,
    minWidth: 65,
    //minHeight: 150,
    border: '10px solid white',
    //marginLeft: 92
  }
};

class ImageView extends React.Component {
  render() {
    return (
      <Paper style={styles.root} zDepth={1}>
        <Card style={styles.card}>
          <CardMedia>
            <img style={styles.image} src={ this.props.originalUrl } />
          </CardMedia>
          <CardActions>
            <FlatButton label="Delete" />
            <FlatButton label="Download" />
          </CardActions>
        </Card>
      </Paper>
    );

    /*return (
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
    );*/
  }
}

ImageView.propTypes = {
  originalUrl: React.PropTypes.string.isRequired,
};

export default ImageView;
