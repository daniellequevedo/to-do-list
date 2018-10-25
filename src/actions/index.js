import uuidv4 from 'uuid/v4';
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from './types';

export const addListItem = ({ description }) => ({
    type: ADD_LIST_ITEM,
    payload: {
        id: uuidv4(),
        description,
        complete: false
    }
});

export const deleteListItem = id => ({
    type: DELETE_LIST_ITEM,
    payload: {
        id
    }
});