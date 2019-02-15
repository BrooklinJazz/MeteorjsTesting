import React, { useState } from 'react';
import Todos from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';

function Counter(props) {
  const [counter, setCounter] = useState(0)
  // const [todos, setTodo] = useState(
    console.log(props.todos);
  // )
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  )
}

export default CounterContainer = withTracker(() => {
  return {
    todos: Todos.find().fetch(),
  };
})(Counter);