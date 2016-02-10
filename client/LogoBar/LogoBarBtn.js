import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/lib/flat-button';

class LogoBarBtn extends React.Component {
  render() {
    return (
      <Link to={this.props.link}>
        <FlatButton
          label={this.props.label}
          onTouchTap={ this.handleTouchTap }
          secondary={true}
        />
      </Link>
    );
  }
}

/*function mapStateToProps(state) {
  return {
    navBtn: state.navBtn,
  }
}*/

export default LogoBarBtn;
//export default connect(mapStateToProps)(ProfileBtn);
