import React, { Component, useState } from 'react';

export default function Hello(params) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  )
}