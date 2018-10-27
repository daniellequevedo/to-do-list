import React from 'react';

// receiving the following from ToDoList.js:
// item (which then gets destructured into the various properties)
// a made-up string prop called checked
// the onDelete and onToggle functions that were previously mapped to dispatch in ToDoList.js
const ListItem = ({ item: {id, description, message}, checked, onDelete, onToggle }) => {

    return (
        <li className="list-item">
            <input 
                type="checkbox"
                onChange={() => onToggle(id)}
                checked={checked}
            />
            <span className="item-description">
                {description}
                &nbsp;
            </span>
            <button className="delete-item" type="button" onClick={() => onDelete(id)}>✖</button>
        </li>
    );
}

export default ListItem;