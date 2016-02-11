import React from 'react';
import Github from './Github';
import LinkedIn from './LinkedIn';

class Social extends React.Component {
  render() {
    return (
      <div>
        <LinkedIn linkedIn={this.props.linkedIn}/>
        <Github github={this.props.github}/>
      </div>
    );
  }
}

export default Social;