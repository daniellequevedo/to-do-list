import React from 'react';
import ListItem from '../components/ListItem';
// import { connect } from 'react-redux';
import { deleteListItem, toggleComplete, saveListItem } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onDelete, onToggle, onSave }) {
  return (
    <React.Fragment>
      <h3>To Do List</h3>
      <ul className="list todos">
        {listItems.map((item) => {
          if (!item.complete) {
            return <ListItem id={item.id} key={item.id} onDelete={onDelete} onToggle={onToggle} onSave={onSave} />
          }
        })}
      </ul>
      <h3>Completed</h3>
      <ul className="list completed">
        {listItems.map((item) => {
          if (item.complete) {
            return <ListItem id={item.id} key={item.id} onDelete={onDelete} onToggle={onToggle} onSave={onSave} checked="checked" />
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
  const onSave = (id, description) => dispatch(saveListItem(id, description));
  return <ToDoList listItems={listItems} onDelete={onDelete} onToggle={onToggle} onSave={onSave} />
};

export default ToDoListContainer;