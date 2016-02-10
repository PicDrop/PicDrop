import React from 'react';


class LinkedIn extends React.Component {
  render() {
    const url = `http://www.github.com/${this.props.github}`;
    return (
      <a style={{ marginLeft: 30 }} href={url}>
        <i className="fa fa-github-alt fa-2x"></i>
      </a>
    );
  }
}

export default LinkedIn;
