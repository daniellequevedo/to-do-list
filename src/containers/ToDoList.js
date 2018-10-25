import React from 'react';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { deleteListItem } from '../actions';

function ToDoList({ listItems, onDelete }) {

    return (

        <React.Fragment>
            <h1>To Do List</h1>
            <ul>
                {listItems.map( (item) => {
                    if (!item.complete) {
                        return <ListItem item={item} key={item.id} onDelete={onDelete} />
                    }
                })}
            </ul>
            <h1>Completed</h1>
            <ul>
                {listItems.map( (item) => {
                    if (item.complete) {
                        return <ListItem item={item} key={item.id} onDelete={onDelete} />
                    }
                })}                
            </ul>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        listItems: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteListItem(id));
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList);