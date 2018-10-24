import React from 'react';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';

function ToDoList({listItems, someAction}) {
    // const toDoItems = [
    //     "apples",
    //     "bananas",
    //     "grapes"
    // ];

    return (
        // <ul>
        //     {toDoItems.map( (item) => 
        //         <ListItem item={item} />
        //     )}
        // </ul>
        <React.Fragment>
            <h1>To Do List</h1>
            <ul>
                {listItems.map( (item) => {
                    if (!item.complete) {
                        return <ListItem description={item.description} />
                    }
                })}
            </ul>
            <h1>Completed</h1>
            <ul>
                {listItems.map( (item) => {
                    if (item.complete) {
                        return <ListItem description={item.description} />
                    }
                })}                
            </ul>
        </React.Fragment>
    );
}

// export default ToDoList;

const mapStateToProps = state => {
    return {
        listItems: state
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         // onDelete: id => {
//         //     dispatch(deleteBookmark(id));
//         }
//     }
// }

// export default connect(
//     mapStateToProps, mapDispatchToProps
// )(ToDoList);

export default connect(
    mapStateToProps
)(ToDoList);