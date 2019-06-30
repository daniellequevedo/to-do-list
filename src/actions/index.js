import uuidv4 from 'uuid/v4';
import { ADD_LIST_ITEM, DELETE_LIST_ITEM, TOGGLE_COMPLETE, EDIT_LIST_ITEM } from './types';

export const addListItem = description => ({
    type: ADD_LIST_ITEM,
    payload: {
        id: uuidv4(),
        description,
        complete: false,
        isEditing: false
    }
});

export const deleteListItem = id => ({
    type: DELETE_LIST_ITEM,
    payload: {
        id
    }
});


// only the id property is needed to toggle the item completed
export const toggleComplete = id => ({
    type: TOGGLE_COMPLETE,
    payload: {
        id
    }
});

// when an existing item is changed
export const saveListItem = (id, description) => ({
    type: SAVE_LIST_ITEM,
    payload: {
        id,
        description
    }
});