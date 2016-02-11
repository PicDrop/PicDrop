import React from 'react';
import { Link, browserHistory } from 'react-router';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';

const styles = {
  root: {
    marginTop: -10,
    marginLeft: -14,
    //maxWidth: screen.width * 0.8,
    //minWidth: screen.width * 0.8,
    backgroundColor: '#F3F3F3',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //minWidth: 965,
    minHeight: screen.height - 240,
    maxHeight: screen.height - 240,
    padding: 21,
    overflowY: 'scroll',
  },
  card: {
    maxWidth: 220,
    maxHeight: 300,
    minWidth: 220,
    minHeight: 300,
    margin: 16,
  },
  image: {
    maxWidth: 200,
    maxHeight: 150,
    minWidth: 200,
    minHeight: 150,
    border: '10px solid white',
    //marginLeft: 92
  }
};

class CollectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cursor: 'auto' };
    this.startHover = this.startHover.bind(this);
    this.endHover = this.endHover.bind(this);
  }
  selectImage(picId) {
    this.props.history.push({ pathname: `/main/image/${picId}` });
  }
  startHover() {
    this.setState({
      cursor: 'pointer',
    });
  }
  endHover() {
    this.setState({
      cursor: 'auto',
    });
  }
  render() {
    var counter = 0;
    const currentCollection = this.props.viewing.get('currentCollection');
    const currentFolder = this.props.viewing.get('currentFolder');
    const currentTags = this.props.viewing.get('currentTags');
    styles.card.cursor = this.state.cursor;
    // If no folder or no tag selected, return all images
    if (currentFolder === '' && !currentTags.size) {
      return (
        <Paper style={styles.root} zDepth={1}>
          {this.props.userPics.map(pic => (
            <Card onClick={ this.selectImage.bind(this, pic.get('id')) }
                  onMouseEnter={ this.startHover }
                  onMouseLeave={ this.endHover }
                  style={styles.card}>
              <CardMedia>
                <img style={styles.image} src={pic.get('thumbnail')} />
              </CardMedia>
              <CardActions>
                  <FlatButton key={counter++} label={pic.get('title')} />
              </CardActions>
              <CardTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  />
            </Card>
          ))}
        </Paper>
      );
    }

    // If folder is selected, return selected images
    let selectedImages = [];
    currentCollection.forEach((val) => {
      selectedImages = selectedImages.concat(this.props.userPics.get(val));
      //return selectedImages;
    });

    console.log(selectedImages);

    return (
      <Paper style={styles.root} z-index={1}>
        {selectedImages.map(pic => (
          //picObj.map(pic => (
          <Card onClick={ this.selectImage.bind(this, pic.get('id')) }
                onMouseEnter={ this.startHover }
                onMouseLeave={ this.endHover }
                style={styles.card}>
            <CardMedia>
              <img style={styles.image} src={pic.get('thumbnail')} />
            </CardMedia>
            <CardActions>
              <FlatButton key={counter++} label={pic.get('title')} />
            </CardActions>
            <CardTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  />
          </Card>
          //))
        ))}
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewing: state.viewing,
  };
}

//export default CollectionView;
export default connect(mapStateToProps)(CollectionView);
