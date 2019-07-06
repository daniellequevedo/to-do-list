import React from 'react';
import ListItem from '../components/ListItem';
import { deleteListItem, toggleComplete } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onDelete, onToggle }) {
  return (
    <React.Fragment>
      <h3>To Do List</h3>
      <ul className="list todos">
        {listItems.map((item) => {
          if (!item.complete) {
            return <ListItem id={item.id} key={item.id} onDelete={onDelete} onToggle={onToggle} />
          }
        })}
      </ul>
      <h3>Completed</h3>
      <ul className="list completed">
        {listItems.map((item) => {
          if (item.complete) {
            return <ListItem id={item.id} key={item.id} onDelete={onDelete} onToggle={onToggle} checked="checked" />
          }
        })}
      </ul>
    </React.Fragment>
  );
}

const ToDoListContainer = () => {
  const listItems = useSelector(state => state);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteListItem(id));
  const onToggle = (id) => dispatch(toggleComplete(id));
  return <ToDoList listItems={listItems} onDelete={onDelete} onToggle={onToggle} />
};

export default ToDoListContainer;