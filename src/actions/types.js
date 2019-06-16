// the purpose of this file is because if I just use strings 
// within the actions index and reducers index files, I won't be
// presented with an error in case of a misspell. But by forcing 
// myself to import these as variables within those two files,
// I'll be presented with an error if there is a misspell.
export const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const EDIT_LIST_ITEM = "EDIT_LIST_ITEM";