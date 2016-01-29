import React from 'react';
import Paper from 'material-ui/lib/paper';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';

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
    border: '1px dotted green',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 20,
    marginTop: 20
  },
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


const CollectionView = () => (
  <Paper style={styles.root} z-index={1}>
    <GridList
      cellHeight={350}
      cols={3}
      padding={20}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </Paper>
);

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
