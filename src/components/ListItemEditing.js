import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

const ListItemEditing = () => {
  // housekeeping
  const dispatch = useDispatch();

  return (
    <p>ListItemEditing</p>
  );
}

export default ListItemEditing;