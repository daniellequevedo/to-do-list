import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

const ListItemEditing = ({ id, description, onEdit }) => {
  // housekeeping
  const dispatch = useDispatch();

  // set local state to equal the description received as props
  const [itemDescription, setItemDescription] = useState(description);

  // handle changes to the description
  let handleDescriptionChange = e => {
    setItemDescription(e.target.value);
  }

  return (
    <React.Fragment>
      <input
        type="text"
        name="description"
        className="item-editing"
        value={itemDescription}
        onChange={handleDescriptionChange}
      />
      <button className="edit-item" type="button" onClick={() => onEdit(id)}>edit</button>
    </React.Fragment>
  );
}

export default ListItemEditing;