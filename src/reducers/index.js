import { ADD_LIST_ITEM, DELETE_LIST_ITEM, TOGGLE_COMPLETE} from '../actions/types';
import initialState from '../data/listItems';

export default function toDoListReducer(state = initialState, action){
    switch (action.type) {
        case ADD_LIST_ITEM:
            return [...state, action.payload];
        
        case DELETE_LIST_ITEM: 
            return state.filter(item => item.id !== action.payload.id);

        case TOGGLE_COMPLETE:
            const newState = [...state];
            const myObject = newState.find(e => e.id === action.payload.id); 
            const index = newState.indexOf(myObject);
            newState[index].complete = !newState[index].complete;
            return newState;
                

        default: 
            return state;
    }
}