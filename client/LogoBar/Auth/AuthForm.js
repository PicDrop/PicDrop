import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import LoginSignup from './LoginSignup';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import appActions from '../../actions/appActions';
import userPicsActions from '../../actions/userPicsActions';
import tagsActions from '../../actions/tagsActions';
import foldersActions from '../../actions/foldersActions';
import viewingActions from '../../actions/foldersActions';


class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionType: 'Log In',
    };

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
      console.log(resp);
      localStorage.setItem('pd.loggedIn', true);
      localStorage.setItem('pd.token', resp.data.token);
      dispatch(appActions.setLoggedIn(true));
      if (route === 'login') {
        dispatch(userPicsActions.setState(resp.data.userPics));
        dispatch(tagsActions.setState(resp.data.tags));
        dispatch(foldersActions.setState(resp.data.folders));
        dispatch(viewingActions.setState(resp.data.viewing));
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
    const { fields: { email, password},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <div>
        <h4>{ this.state.submissionType }</h4>
        <form onSubmit={this.submitForm}>
        <TextField
          hintText="Email"
          floatingLabelText="Email:"
          {...email}
        />
        <br/>
        <TextField
          type="password"
          hintText="Password"
          floatingLabelText="Password:"
          {...password}
        />
        <RaisedButton
          label="Login" primary={ true } type="submit" style={{ margin: 12 }}
        />
        </form>
        <br/>
        <LoginSignup
          flipForm={ this.flipForm }
        />
        <div className="row center-xs">
          <div className="col-xs-3">
            <div className="box">
              <IconButton iconClassName=""/>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="box">
            </div>
          </div>
        </div>
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
};

export default reduxForm({
  form: 'Auth',
  fields: ['email', 'password'],
})(AuthForm);
