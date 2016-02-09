import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';
import axios from 'axios';
import userPicsActions from '../actions/userPicsActions';
import tagsActions from '../actions/tagsActions';
import foldersActions from '../actions/foldersActions';
import profileActions from '../actions/profileActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    const token = localStorage.getItem('pd.token');
    if (!token) {
      this.props.history.push({ pathname: '/splash' });
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios.get('/api/user/getState').then((resp) => {
        this.props.dispatch(userPicsActions.setState(resp.data.userPics));
        this.props.dispatch(tagsActions.setState(resp.data.tags));
        this.props.dispatch(foldersActions.setState(resp.data.folders));
        this.props.dispatch(profileActions.setState(resp.data.profile));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
}


export default connect()(Main);
