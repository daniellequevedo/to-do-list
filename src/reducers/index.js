import {DELETE_LIST_ITEM} from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action){
    switch (action.type) {
        case DELETE_LIST_ITEM: 
            return state.filter(item => item.id !== action.payload.id);
        default: 
            return state;
    }
}