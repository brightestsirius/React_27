import React from 'react'

export default function CounterStatistics({counter, clickCount}) {
  return (
    <ul>
        <li>Counter: {counter}</li>
        <li>Click count: {clickCount}</li>
    </ul>
  )
}