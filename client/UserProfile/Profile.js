import React from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import profileActions from '../actions/profileActions';

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
    paddingRight: 29
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
  componentWillMount() {
    console.log("Go and fetch profile");
    this.props.getProfile();
  }

  onSubmit(props) {
    this.props.setProfile(props)
      .then((resp) => {
        console.log(resp);
        this.props.history.push.bind(this, { pathname: '/main/collection' });
      })
      .catch((error) => {
        console.log(error);
        this.props.history.push.bind(this, { pathname: '/main/collection' });
      });

  }
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col">
          <Paper style={styles.root} zDepth={1}>
            <form onSubmit={handleSubmit(this.props.setProfile)}>
              <h4>Edit Profile</h4>
              <div className="row">
                <label style={styles.emailLabel}>Email</label>
                <TextField
                  style={styles.textField}
                  defaultValue = "Default Email"
                  {...email}
                />
              </div>
              <div className="row">
                <label style={styles.label}>Password</label>
                <TextField
                  style={styles.textField}
                  type="password"
                  placeholder="New Password"
                  {...password}
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
                  disabled={password.error ? true : false}
                  type="submit"
                >
                  {
                    password.error ?
                    <i className="material-icons btn-icons" style={styles.iconGray}>check</i> :
                    <i className="material-icons btn-icons" style={styles.iconGreen}>check</i>
                  }
                </RaisedButton>
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

  if(!values.email) {
    errors.email = 'Enter Email';
  }
  if(!values.password) {
    errors.password = 'Enter Pw';
  }

  return errors;
}

export default reduxForm({
  form: 'ProfileForm',
  fields: ['email', 'password'],
  validate
}, null, { setProfile: profileActions.setProfile, getProfile: profileActions.getProfile })(Profile);
