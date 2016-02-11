import React from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import userPicsActions from '../../../../../actions/userPicsActions';
import tagsActions from '../../../../../actions/tagsActions';


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
    e.preventDefault();
    const tag = this.props.values.tag;
    const picId = this.props.picId;
    const token = localStorage.getItem('pd.token');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.post(`/api/user/tagDrop`,
      { picId: picId, tag: tag }
    )
    .then((resp) => {
      console.log(resp);
      this.props.dispatch(userPicsActions.addTagToPic(tag, picId));
      this.props.dispatch(tagsActions.addPicToTag(tag, picId));
    });
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
  picId: React.PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'tag',
  fields: ['tag'],
})(AddTag);
