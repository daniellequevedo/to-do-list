import uuidv4 from 'uuid/v4';
import { DELETE_LIST_ITEM } from './types';

export const deleteListItem = id => ({
    type: DELETE_LIST_ITEM,
    payload: {
        id
    }
});