import React from 'react';
import Dialog from 'material-ui/lib/dialog';

class DialogSuccess extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          title="Success"
          modal={false}
          open={this.props.shouldOpen}
        >
          Profile updated!!
        </Dialog>
      </div>
    );
  }
}

export default DialogSuccess;
