import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import LoginSignup from './LoginSignup';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import appActions from '../../actions/appActions';
import userPicsActions from '../../actions/userPicsActions';
import tagsActions from '../../actions/tagsActions';
import foldersActions from '../../actions/foldersActions';
import profileActions from '../../actions/profileActions';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionType: 'Log In',
    };
    // this.googleAuth = this.googleAuth.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.flipForm = this.flipForm.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    const route = this.state.submissionType.toLowerCase().split(' ').join('');
    const dispatch = this.props.dispatch;
    axios.post(`/api/auth/${route}`,
      {
        email: this.props.values.email,
        password: this.props.values.password,
      }
    )
    .then((resp) => {
      localStorage.setItem('pd.loggedIn', true);
      localStorage.setItem('pd.token', resp.data.token);
      dispatch(appActions.setLoggedIn(true));
      if (route === 'login') {
        dispatch(userPicsActions.setState(resp.data.userPics));
        dispatch(tagsActions.setState(resp.data.tags));
        dispatch(foldersActions.setState(resp.data.folders));
        dispatch(profileActions.setState(resp.data.profile));
      }
      this.props.history.push({ pathname: '/main/collection' });
      this.props.handleSubmit();
    });
  }
  flipForm() {
    console.log('in flipForm', this.state.submissionType);
    if (this.state.submissionType === 'Log In') {
      this.setState({ submissionType: 'Sign Up' });
    } else {
      this.setState({ submissionType: 'Log In' });
    }
  }
  render() {
    const { fields: { email, password },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <div>
        <h4 style={{ color: '#5A5A5A' }}>{ this.state.submissionType }</h4>
        <form onSubmit={this.submitForm}>
        <TextField
          underlineStyle={{backgroundColor: '#CCCCCC'}}
          hintText="Email"
          floatingLabelText="Email:"
          {...email}
        />
        <br/>
        <TextField
          underlineStyle={{backgroundColor: '#CCCCCC'}}
          type="password"
          hintText="Password"
          floatingLabelText="Password:"
          {...password}
        />
        <RaisedButton
          label="Login" type="submit" labelColor={ '#5A5A5A' }style={{ margin: 12 }}
        />
        </form>
        <br/>
        <LoginSignup
          flipForm={ this.flipForm }
        />
      </div>
    );
  }
}
AuthForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  values: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Auth',
  fields: ['email', 'password'],
})(AuthForm);


