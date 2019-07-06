import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemLabel from '../components/ListItemLabel';
import ListItemEditing from '../components/ListItemEditing';

// receiving the following from ToDoList.js:
// item (which then gets destructured into the various properties)
// a made-up string prop called checked
// the onDelete and onToggle functions that were previously mapped to dispatch in ToDoList.js
const ListItem = ({ id, checked, onDelete, onToggle }) => {

  const [isEditing, setIsEditing] = useState(false);

  // when we want to edit the item
  let onEdit = () => {
    setIsEditing(true);
  }

  // when we want to cancel editing the item
  let onCancel = () => {
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      <input
        type="checkbox"
        id={`check-complete-${id}`}
        onChange={() => onToggle(id)}
        checked={checked}
      />
      {isEditing
      ? <ListItemEditing id={id} onCancel={onCancel} />
      : <ListItemLabel id={id} onEdit={onEdit} />
      }
      <button className="delete-item" type="button" onClick={() => onDelete(id)}>✖</button>
    </li>
  );
}

export default ListItem;