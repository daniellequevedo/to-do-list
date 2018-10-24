import React from 'react';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';

function ToDoList({listItems, someAction}) {
    const toDoItems = [
        "apples",
        "bananas",
        "grapes"
    ];

    return (
        // <ul>
        //     {toDoItems.map( (item) => 
        //         <ListItem item={item} />
        //     )}
        // </ul>
        <ul>
            {listItems.map( (item) => 
                <ListItem item={item} />
            )}
        </ul>        
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