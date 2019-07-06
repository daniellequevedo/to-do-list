import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemLabel from '../components/ListItemLabel';
import ListItemEditing from '../components/ListItemEditing';

// receiving the following from ToDoList.js:
// item (which then gets destructured into the various properties)
// a made-up string prop called checked
// the onDelete and onToggle functions that were previously mapped to dispatch in ToDoList.js
const ListItem = ({ item: { id, description, isEditing }, checked, onDelete, onToggle, onEdit }) => {

  return (
    <li className="list-item">
      <input
        type="checkbox"
        id={`check-complete-${id}`}
        onChange={() => onToggle(id)}
        checked={checked}
      />
      {isEditing
      ? <ListItemEditing id={id} description={description} onEdit={onEdit} />
      : <ListItemLabel id={id} description={description} onEdit={onEdit} />
      }
      <button className="delete-item" type="button" onClick={() => onDelete(id)}>✖</button>
    </li>
  );
}

export default ListItem;