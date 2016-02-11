import React from 'react';


class LinkedIn extends React.Component {
  render() {
    const url = `http://www.linkedin.com/in/${this.props.linkedIn}`;
    return (
      <a href={url}>
        <i className="fa fa-linkedin fa-2x"></i>
      </a>
    );
  }
}

export default LinkedIn;
