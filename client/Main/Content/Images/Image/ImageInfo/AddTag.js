import React from 'react';
import { reduxForm } from 'redux-form';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';


class AddTag extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTag() {
    //grab tagname value from input
    //check for existance of this tag
      //if exists add picId
        //pass that updated tag object
      //if doesn't exist
        //build new tag object
        //pass new tag object to tagsAction.addTag


    //take current tags
    //merge tagname with id
      //pass all tags to tagsAction.addTag
  }

  handleSubmit(e) {
    console.log("handleSubmit called");
    console.log(this.props.values.tag)
  }

  render() {
    const { fields: { tag }, handleSubmit } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
      <TextField
        type="tag"
        hintText="Add a tag"
        {...tag}
      />
      <br/>
        <FlatButton
          label="Add Tag"
          type="submit"
          hoverColor="WHITE"
          disableTouchRipple={true}
        />
      </form>
    );
  }
}

AddTag.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'tag',
  fields: ['tag'],
})(AddTag);
