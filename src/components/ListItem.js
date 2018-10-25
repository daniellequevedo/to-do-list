import React from 'react';

const ListItem = ({ item: {id, description, message}, onDelete}) => {

    return (
        <li>
            <span>
                {description}
                &nbsp;
            </span>
            <button type="button" onClick={() => onDelete(id)}>
                delete
            </button>
        </li>
    );
}

export default ListItem;