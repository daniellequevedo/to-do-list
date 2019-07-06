import React, { Component } from 'react';

class ListItemLabel extends Component {

  state = {
    description: this.props.description,
    isEditing: this.props.isEditing
  }

  handleDescriptionChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <React.Fragment>
        <label
          className="item-description"
          htmlFor={`check-complete-${this.props.id}`}
        >
          {this.props.description}
        </label>
        <button className="edit-item" type="button" onClick={() => this.props.onEdit(this.props.id)}>edit</button>
      </React.Fragment>
    );
  }
}




export default ListItemLabel;