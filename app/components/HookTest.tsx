'use client'

import React, { useState } from 'react'

// we can only use hooks in function component
// we can't put a hook in a if()/ functions/ nest it anything

const HookTest = () => {

let [counterValue, setCounterValue] = useState(5)

function decrementCounter() {
  setCounterValue(counterValue - 1);
}

function incrementCounter() {
  setCounterValue(counterValue + 1);
}

  return (
    <>
      <button className='border-2 border-slate-950 p-2 mr-2' onClick={decrementCounter}>-</button>
        <span className='text-lg'>{ counterValue }</span>
      <button className='border-2 border-slate-950 p-2 ml-2' onClick={incrementCounter}>+</button>
    </>
  )
}

export default HookTest