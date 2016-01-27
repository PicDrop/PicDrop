import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Content;
