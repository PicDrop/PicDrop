import React from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import Paper from 'material-ui/lib/paper';
import userPicsActions from '../../../../../actions/userPicsActions';
import foldersActions from '../../../../../actions/foldersActions';
import tagsActions from '../../../../../actions/tagsActions';
import { Map, List } from 'immutable';

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
    padding: 21,
  },
  card: {
    maxWidth: 670,
    maxHeight: 730,
/*    minWidth: 220,*/
    minHeight: 300,
    margin: 16,
  },
  image: {
    maxWidth: 650,
    maxHeight: 650,
    minWidth: 65,
    //minHeight: 150,
    border: '10px solid white',
  }
};

class ImageView extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const picId = this.props.picId;
    const token = localStorage.getItem('pd.token');
    const folderName = this.props.picInfo.get('folder');
    const tags = this.props.picInfo.get('tags');
    const dispatch = this.props.dispatch;

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.post('/api/user/removeDrop',
      { picId }
    )
    .then((response) => {
      if (folderName !== null) {
        dispatch(foldersActions.removePic(folderName, picId));
      }
      if (tags.size) {
        dispatch(tagsActions.removePic(tags, picId));
      }
      dispatch(userPicsActions.deletePic(picId));
      // this.props.history.push({ pathname: '/main/collection' });
    });
  }

  render() {
    return (
      <Paper style={styles.root} zDepth={1}>
        <Card style={styles.card}>
          <CardMedia>
            <img style={styles.image} src={ this.props.originalUrl } />
          </CardMedia>
          <CardActions>
            <FlatButton
              label="Delete"
              onTouchTap={ this.handleDelete }
            />
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
              <FlatButton label="Delete" onTouchTap={ this.handleDelete } />
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
