import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

const ListItemEditing = ({ id, description, onEdit }) => {
  // housekeeping
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <input
        type="text"
        name="description"
        className="item-editing"
        value={description}
      // onChange={this.handleDescriptionChange}
      />
      <button className="edit-item" type="button" onClick={() => onEdit(id)}>edit</button>
    </React.Fragment>
  );
}

export default ListItemEditing;