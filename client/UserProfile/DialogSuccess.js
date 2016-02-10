import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

class DialogSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
    setTimeout(() => {
      this.setState({ open: false });
    }, 1500);
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen.bind(this)} />
        <Dialog
          title="Success"
          modal={false}
          open={this.state.open}
        >
          Profile updated!!
        </Dialog>
      </div>
    );
  }
}

export default DialogSuccess;
