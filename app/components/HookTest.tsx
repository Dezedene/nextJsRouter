'use client'

import React, { useState } from 'react'

// we can only use hooks in function component
// we can't put a hook in a if()/ functions/ nest it anything
//update the state = component re-render

const HookTest = () => {

  let [ count, setCount ] = useState( () => { return 0 })
  let [ theme, setTheme ] = useState( () => { return 'blue'})
// let [state, setState] = useState({ count: 0, theme: 'blue' })
// const count = state.count;
// const theme = state.theme;

function decrementCounter() {
  setCount(prevCount => prevCount - 1);
  setTheme('red')
    // setState(prevState => {
    // return { ...prevState, count: prevState.count - 1}
    // })
}

function incrementCounter() {
  setCount(prevCount => prevCount + 1);
  setTheme('purple')
  // setState(prevState => {
    // return { ...prevState, count: prevState.count + 1}
  // })
}

  return (
    <>
      <button className='border-2 border-slate-950 p-2 mr-2' onClick={decrementCounter}>-</button>
        <span className='text-lg mr-2'>{ count }</span>
        <span className='text-lg'>{ theme }</span>
      <button className='border-2 border-slate-950 p-2 ml-2' onClick={incrementCounter}>+</button>
    </>
  )
}

export default HookTest