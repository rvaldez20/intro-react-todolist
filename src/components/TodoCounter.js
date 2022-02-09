import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({totalTodos, completedTodos}) => {
   return (
      <h2 className="TodoCounter">{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
   );
};

export default TodoCounter;