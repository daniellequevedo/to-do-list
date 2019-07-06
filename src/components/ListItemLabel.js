import React from 'react';
import { useSelector } from 'react-redux';

const ListItemLabel = ({ id, onEdit }) => {
  // get all of the list items
  const listItems = useSelector(state => state);

  // use the id to get the one list item
  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  // grab the description of the selectedListItem
  const description = selectedListItem.description;

  return (
    <React.Fragment>
      <label
        className="item-description"
        htmlFor={`check-complete-${id}`}
      >
        {description}
      </label>
      <button className="edit-item" type="button" onClick={() => onEdit(id)}>edit</button>
    </React.Fragment>
  );
}

export default ListItemLabel;