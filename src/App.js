import React, { Component } from 'react';
import './App.css';
import ToDoListContainer from './containers/ToDoListContainer';
import AddListItem from './containers/AddListItem';
import NewListItem from './components/NewListItem';

// class App extends Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <AddListItem />
//         <ToDoListContainer />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="wrapper">
    
    <NewListItem />  
    {/* <AddListItem /> */}
    
    {/* <ToDoListContainer /> */}
    {/* "YELLO!" */}
  </div>
  );
}

export default App;
