import React from 'react';
import { useSelector } from 'react-redux';

const ListItemLabel = ({ id, onEdit }) => {
  // get all of the list items
  const listItems = useSelector(state => state);

  // use he id to get the list item
  const selectedListItem = listItems.find(() => {
    return listItems.id === id;
  });

  // return jsx
  return (
    <React.Fragment>
      <label className="item-description">
        {description}
      </label>
      <button className="edit-item" type="button" onClick={() => onEdit()}>edit</button>
    </React.Fragment>
  );

}




export default ListItemLabel;