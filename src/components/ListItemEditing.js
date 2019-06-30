import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

const ListItemEditing = ({ id, onCancel }) => {
  // housekeeping
  const dispatch = useDispatch();

  // get all of the list items
  const listItems = useSelector(state => state);

  // use the id to get the list item
  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  // set local state to equal the selectedListItem's description
  const [description, setDescription] = useState(selectedListItem.description);

  // handle changes to the description (item text)
  handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  // handle saving the new description value
  onSave = () => {
    dispatch(saveListItem(id, description));
  }

  // returning jsx
  return (
    <React.Fragment>
      <input
        type="text"
        name="description"
        className="item-editing"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className="save-item" type="button" onClick={() => onCancel()}>cancel</button>
      <button className="save-item" type="button" onClick={() => onSave()}>save</button>
    </React.Fragment>
  );
}

export default ListItemEditing;