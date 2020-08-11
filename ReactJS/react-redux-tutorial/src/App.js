import React from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import Todos from './components/Todos';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
// 커밋
const App = () => {
  return (
    <div className="TodoTemplate">
      <TodosContainer />
    </div>
  );
};

export default App;
