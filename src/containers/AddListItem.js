import React from 'react';
import { useDispatch } from 'react-redux';
import { addListItem } from '../actions';
import NewListItem from '../components/NewListItem';

const AddListItem = () => {
    const dispatch = useDispatch();
    const onAddListItem = (item) => dispatch(addListItem(item));
    return <NewListItem onAddListItem={onAddListItem} />
}

export default AddListItem;