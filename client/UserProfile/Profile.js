import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import axios from 'axios';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import profileActions from '../actions/profileActions';
import DialogSuccess from './DialogSuccess';

const styles = {
  root: {
    marginTop: 10,
    marginLeft: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    minWidth: 300,
    padding: 25,
  },
  label: {
    margin: 15,
  },
  emailLabel: {
    margin: 15,
    paddingRight: 55
  },
  oldPwLabel: {
    margin: 15,
    paddingRight: 5
  },
  textField: {
    maxWidth: 300,
    minWidth: 300,
  },
  button: {
    margin: 20,
    marginRight: 0,
    width: 115,
    minWidth: 115
  },
  buttonLink: {
    margin: 10,
    marginRight: 0,
    width: 220,
    minWidth: 220
  },
  iconRed: {
    color: 'red',
  },
  iconGreen: {
    color: 'green',
  },
  iconGray: {
    color: 'gray',
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldOpen: false,
      title: '',
      message: ''
    };
  }
/*  componentWillMount() {
    console.log("Go and fetch profile");
    //this.props.getProfile();
  }*/

/*  <form onSubmit={handleSubmit(this.onSubmit.bind(this, userId))}>
    onSubmit(id, props) {
      this.props.setProfile(id, props)
        .then((resp) => {
          console.log(resp);
          this.props.history.push.bind(this, { pathname: '/main/collection' });
        })
        .catch((error) => {
          console.log(error);
          this.props.history.push.bind(this, { pathname: '/main/collection' });
        });
  }*/
  submitForm(e) {
    e.preventDefault();
    var token = localStorage.getItem('pd.token');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    // axios --put oldPassword and new pw in data /api/user/updatePassword
    axios.put(`/api/user/updatePassword`,
      {
        oldPassword: this.props.values.oldPassword,
        newPassword: this.props.values.newPassword,
      })
      .then((resp) => {
        this.setState({
          shouldOpen: true,
          title: 'Success',
          message: 'Password Updated!!'
        });
        setTimeout(() => {
          this.setState({
            shouldOpen: false,
            title: '',
            message: ''
          });
        }, 1500);
        this.props.history.push({ pathname: '/main/collection' });
      })
      .catch((error) => {
        this.setState({
          shouldOpen: true,
          title: 'Error',
          message: 'Incorrect Old Password'
        });
        setTimeout(() => {
          this.setState({
            shouldOpen: false,
            title: '',
            message: ''
          });
        }, 1500);
      });
  }

  render() {
    console.log(this.props.profile.get('email'));
    const userEmail = this.props.profile.get('email');
    const userId = this.props.profile.get('id');
    console.log(userId);
    const { fields: { email, oldPassword, newPassword }, handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col">
          <Paper style={styles.root} zDepth={1}>
            <DialogSuccess shouldOpen={this.state.shouldOpen} title={this.state.title} message={this.state.message}/>
            <form onSubmit={this.submitForm.bind(this)}>
              <h4>Edit Profile</h4>
              <div className="row">
                <label style={styles.emailLabel}>Email</label>
                <TextField
                  style={styles.textField}
                  {...email}
                  defaultValue = {userEmail}
                />
              </div>
              <div className="row">
                <label style={styles.oldPwLabel}>Old Password</label>
                <TextField
                  style={styles.textField}
                  type="password"
                  placeholder="Old Password"
                  {...oldPassword}
                />
              </div>
              <div className="row">
                <label style={styles.label}>New Password</label>
                <TextField
                  style={styles.textField}
                  type="password"
                  placeholder="New Password"
                  {...newPassword}
                />
              </div>
              <div className="row end-sm end-md end-lg">
                <RaisedButton
                  onTouchTap={ this.props.history.push.bind(this, { pathname: '/main/collection' }) }
                  className="btn-profile"
                  style={styles.button}
                  linkButton={true}
                  label="Cancel"
                >
                  <i className="material-icons btn-icons" style={styles.iconRed}>clear</i>
                </RaisedButton>

                <RaisedButton
                  className="btn-profile"
                  style={styles.button}
                  label="Save"
                  disabled={oldPassword.error ? true : false}
                  type="submit"
                >
                  {
                    oldPassword.error ?
                    <i className="material-icons btn-icons" style={styles.iconGray}>check</i> :
                    <i className="material-icons btn-icons" style={styles.iconGreen}>check</i>
                  }
                </RaisedButton>
              </div>
              <div className="row end-sm end-md end-lg">
                <Link to={`/api/auth/google`}>
                  <RaisedButton
                    className="btn-profile-link"
                    style={styles.buttonLink}
                    label="Link to Google Drive"
                    disabled={oldPassword.error ? true : false}
                  >
                    {
                      oldPassword.error ?
                        <i className="material-icons btn-icons" style={styles.iconGray}>link</i> :
                        <i className="material-icons btn-icons" style={styles.iconGreen}>link</i>
                    }
                  </RaisedButton>
                </Link>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.newPassword) {
    errors.newPassword = 'Enter new Pw';
  }
  if(!values.oldPassword) {
    errors.oldPassword = 'Enter old Pw';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  }
}

export default reduxForm({
  form: 'ProfileForm',
  fields: ['email', 'oldPassword', 'newPassword'],
  validate,
}, mapStateToProps, { setProfile: profileActions.setProfile })(Profile);

/*export default reduxForm({
  form: 'ProfileForm',
  fields: ['email', 'oldPassword', 'newPassword'],
  validate,
}, null, { setProfile: profileActions.setProfile, getProfile: profileActions.getProfile })(Profile);*/
