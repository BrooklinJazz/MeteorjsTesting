import React, { useState } from 'react';
import Todos from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';
import Button from '@material-ui/core/Button';

function Counter(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)} variant="contained">
        Click Me
      </Button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  )
}

export default CounterContainer = withTracker(() => {
  return {
    todos: Todos.find().fetch(),
  };
})(Counter);