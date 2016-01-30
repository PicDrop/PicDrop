import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import server from '../../utils/ajaxConfig';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    axios.post('/api/auth/create',
      {
        username: this.props.values.email,
        password: this.props.values
      }
    )
    .then((resp)=> {
      console.log(resp);
      localStorage.setItem('pd.loggedIn', true);
      this.props.handleSubmit();
      this.props.history.push({pathname: '/main/collection'});
    });
  }
  changeText(e) {
    console.log(e, 'inside changeText');
  }
  render() {
    const { fields: { email, password, submissionType },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <div>
        <h4>Log In</h4>
        <form onSubmit={this.submitForm}>
        <TextField
          hintText="Email"
          floatingLabelText="Email:"
          {...email}
        />
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password:"
          {...password}
        />
        <RaisedButton 
          label="Login" primary={true} type="submit" style={{ margin: 12 }}
        />
        </form>
        <br/>
        <FlatButton label="Don't have an account? Sign up."/>
        <div className="row center-xs">
          <div className='col-xs-3'>
            <div className="box">
              <IconButton iconClassName=""/>
            </div>
          </div>
          <div className='col-xs-3'>
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
  onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'Auth',
  fields: ['email', 'password', 'submissionType']
  },
  (state) => ({
    initialValues: { email: '', password: '', submissionType: 'login' }
  })
)(AuthForm);
