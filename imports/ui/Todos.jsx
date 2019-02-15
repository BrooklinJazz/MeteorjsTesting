import React, { useState } from 'react';
import Todos from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';

const renderTodo = (todo, i) => {
    return (
        <li key={i} style={todo.completed ? { textDecoration: "line-through" } : {}}>{todo.title}</li>
    )
}

const TodosComponent = (props) => {
    const todoList = props.todos.map(
        (todo, i) => renderTodo(todo, i)
    );
    return (
        <div>
            <h1>My Example Todo List</h1>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default TodosContainer = withTracker(() => {
    return {
        todos: Todos.find().fetch(),
    };
})(TodosComponent);