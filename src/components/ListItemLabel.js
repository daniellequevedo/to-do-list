import React from 'react';

// receiving the following from ListItem.js:
// label description
const ListItemLabel = ({id, description, isEditing}) => {
    if (isEditing) {
        return (
            <input 
                type="text"
                className="item-editing"
                value={description}  
            />     
        );
    }

    return (
        <label 
            className="item-description"
            htmlFor={`check-complete-${id}`}
        >
            {description}
        </label>
    );

}




export default ListItemLabel;