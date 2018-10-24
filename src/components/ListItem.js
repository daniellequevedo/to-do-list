import React from 'react';

const ListItem = ({description}) => {

    return (
        <li>
            <span>
                {description}
                &nbsp;
            </span>
            <button>
                delete
            </button>
        </li>
    );
}

export default ListItem;