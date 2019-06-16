import React, { Component } from 'react';
import './App.css';
import ToDoListContainer from './containers/ToDoListContainer';
import AddListItem from './containers/AddListItem';
import NewListItem from './components/NewListItem';

function App() {
  return (
    <div className="wrapper">
      <NewListItem />
      <ToDoListContainer />
    </div>
  );
}

export default App;
