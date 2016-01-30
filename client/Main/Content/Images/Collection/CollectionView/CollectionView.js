import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';

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

/*class CollectionView extends React.Component {
  render() {
    var counter = 0;
    return (
      <Paper style={styles.root} z-index={1}>

        {this.props.userPics.map(pic => (
          <Card style={styles.card}>
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
}*/

class CollectionView extends React.Component {
  render() {
    var counter = 0;
    if(!this.props.viewingActions) {
      return <div>select a folder</div>;
    }
    return (
      <Paper style={styles.root} z-index={1}>
        {this.props.viewingActions};
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewingActions: state.viewingActions,
  };
}

//export default CollectionView;
export default connect(mapStateToProps)(CollectionView);
