import React from 'react';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { deleteListItem, toggleComplete } from '../actions';

function ToDoList({ listItems, onDelete, onToggle }) {

    return (

        <React.Fragment>
            <h3>To Do List</h3>
            <ul>
                {listItems.map( (item) => {
                    if (!item.complete) {
                        return <ListItem item={item} key={item.id} onDelete={onDelete} onToggle={onToggle}/>
                    }
                })}
            </ul>
            <h3>Completed</h3>
            <ul>
                {listItems.map( (item) => {
                    if (item.complete) {
                        return <ListItem item={item} key={item.id} onDelete={onDelete} onToggle={onToggle} checked="checked" />
                    }
                })}                
            </ul>
        </React.Fragment>
    );
}

// make our local state match what's in the redux store's state, and refer to it all as "listItems"
const mapStateToProps = state => {
    return {
        listItems: state
    }
}

// map the dispatch funcationality to our function properties that were imported from the actions/index.js file
// and call those functions by other names (onDelete and onToggle)
const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteListItem(id));
        },
        onToggle: id => {
            dispatch(toggleComplete(id));
        },
    }
}

// connect this whole file to our state
export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList);