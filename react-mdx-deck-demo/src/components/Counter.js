import React, { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
