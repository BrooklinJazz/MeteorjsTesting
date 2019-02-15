import React, { useState } from 'react';
import Todos from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';
import { Icon } from "@material-ui/core";

const TodosComponent = ({toggleCompleted, deleteTodo, addTodo, todos}) => {
    const renderTodo = (todo) => {
        return (
            <li
                onClick={() => toggleCompleted(todo)}
                key={todo._id}
                style={todo.completed ? { textDecoration: "line-through" } : {}}
            >
                {todo.title}
                <Icon onClick={() => deleteTodo(todo)}>delete</Icon>
            </li>
        )
    }

    const [newTodo, setNewTodo] = useState("")

    return (
        <div>
            <h1>My Example Todo List</h1>
            <ul>
                {todos.map(renderTodo)}
            </ul>
            <input
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="New Todo"
                type="text"
                name="newTodo"
            />
            <button onClick={() => addTodo(newTodo)}>Add Todo</button>
        </div>
    )
}

export default TodosContainer = withTracker(() => {
    return {
        todos: Todos.find().fetch(),
        deleteTodo: (todo) => Todos.remove({ _id: todo._id }),
        toggleCompleted: (todo) => Todos.update({ _id: todo._id }, { ...todo, completed: !todo.completed }),
        addTodo: (title) => Todos.insert({ title, completed: false })
    };
})(TodosComponent);