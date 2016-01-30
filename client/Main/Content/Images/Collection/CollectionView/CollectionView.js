import React from 'react';
import Paper from 'material-ui/lib/paper';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

/*class CollectionView extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="card">
              <div className="card-image">
                <img src=""/>
              </div>
              <div className="card-content">
                <div className="card-action">
                  <a href="#">dribble.com</a>
                </div>
                <p>Description</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}*/
const style = {
  height: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const styles = {
  root: {
    marginTop: 20,
    backgroundColor: '#E9E9F4',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    //minWidth: 965,
    padding: 16,
  },
  gridList: {
    width: '800',
    height: '100%',
    overflowY: 'auto',
    margin: 15
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

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class CollectionView extends React.Component {
  render() {
    var count = 0;
    return (
      <Paper style={styles.root} z-index={1}>

        {this.props.userPics.map(pic => (
        <Card style={styles.card}>
          <CardMedia>
            <img style={styles.image} src={pic.get('thumbnail')} />
          </CardMedia>
          <CardActions>
            <FlatButton label={pic.get('title')} />
          </CardActions>
          <CardTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  />

        </Card>
        ))}
      </Paper>
    );
  }
}

/*const CollectionView = () => (
  <Paper style={styles.root} z-index={1}>
      {tilesData.map(tile => (

        <Paper style={style1} z-depth={1}>
          <div className="card">
            <div className="card-image">
              <img src=""/>
            </div>
            <div className="card-content">
              <div className="card-action">
                <a href="#">dribble.com</a>
              </div>
              <p>Description</p>
            </div>
          </div>
        </Paper>
      ))}
  </Paper>
);*/

/*class CollectionView extends React.Component {
  render() {
    return (
      <Paper style={style} z-depth={1}>
        <div className="card">
          <div className="card-image">
            <img src=""/>
          </div>
          <div className="card-content">
            <div className="card-action">
              <a href="#">dribble.com</a>
            </div>
            <p>Description</p>
          </div>
        </div>
      </Paper>
    );
  }
}*/

export default CollectionView;
