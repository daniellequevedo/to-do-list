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
                id={`check-complete-${id}`}
                onChange={() => onToggle(id)}
                checked={checked}
            />
            <label 
                className="item-description"
                for={`check-complete-${id}`}
            >
                {description}
            </label>
            <button className="edit-item" type="button">edit</button>
            <button className="delete-item" type="button" onClick={() => onDelete(id)}>✖</button>
        </li>
    );
}

{/* <svg id="i-checkmark" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M2 20 L12 28 30 4"></path>
</svg> */}

{/* <svg id="i-trash" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"></path>
</svg> */}

{/* <svg id="i-edit" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z"></path>
</svg> */}

{/* <svg id="i-compose" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z"></path>
</svg> */}

export default ListItem;