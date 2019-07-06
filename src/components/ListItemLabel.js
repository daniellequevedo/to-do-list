import React, { Component } from 'react';

const ListItemLabel = ({ id, description, onEdit }) => {

  // handleDescriptionChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <React.Fragment>
      <label
        className="item-description"
        htmlFor={`check-complete-${id}`}
      >
        {description}
      </label>
      <button className="edit-item" type="button" onClick={() => onEdit(id)}>edit</button>
    </React.Fragment>
  );
}

export default ListItemLabel;