import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

const ListItemEditing = ({ id, onCancel, onSave }) => {
  // housekeeping
  const dispatch = useDispatch();

  // get all of the list items
  const listItems = useSelector(state => state);

  // use the id to get the one list item
  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  // set local state to equal the description of the selected list item
  const [description, setDescription] = useState(selectedListItem.description);

  // handle changes to the description
  let handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  // handle saving a change to the description
  let handleDescriptionSave = e => {
    onSave(id, description);
    onCancel(id);
  }

  return (
    <React.Fragment>
      <input
        type="text"
        name="description"
        className="item-editing"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className="edit-item" type="button" onClick={() => onCancel(id)}>cancel</button>
      <button className="edit-item" type="button" onClick={() => handleDescriptionSave()}>save</button>
    </React.Fragment>
  );
}

export default ListItemEditing;