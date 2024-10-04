import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='main'>
        <h1>This is a Simple  Counter App</h1>
        <h2>Current Count</h2>
        <div className="fun">
        <button onClick={()=>setCount(count - 1)}>-</button>
        <span> {count}</span>
        <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    </div>
  )
}

export default Counter