import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class TagList extends React.Component {
  render(){
    var tags = this.props.currentTags.map((tag, index) => {
      return <ListItem key={ index } primaryText={ tag } disabled={true} />
    })
    return (
      <div>
        { tags }
      </div>
    )
  }
}

TagList.propTypes = {
  currentTags: React.PropTypes.array.isRequired,
};

export default TagList;
