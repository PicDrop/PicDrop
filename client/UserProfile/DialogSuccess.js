import React from 'react';
import Dialog from 'material-ui/lib/dialog';

class DialogSuccess extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          title={this.props.title}
          modal={false}
          open={this.props.shouldOpen}
        >
          {this.props.message}
        </Dialog>
      </div>
    );
  }
}

export default DialogSuccess;
