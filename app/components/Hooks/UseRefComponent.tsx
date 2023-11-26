'use client'

import React, { useState, useEffect, useRef } from 'react'

import TextField from '@mui/material/TextField';


const UseRefTest = () => {
  const [ name, setName ] = useState('')

// without the [] as a second parameter,
// the useEffect below would lead to an infinite loop

// const [ renderCount, setRenderCount ] = useState(0)
// useEffect(() => {
  //   setRenderCount( prevRenderCount => prevRenderCount +1)
  // }, [])
  
  
  // An other way to do it without the [] is to use UseRef hook:
  

  const renderCount = useRef(1)
  useEffect (() => {
    renderCount.current = renderCount.current +1
  })


  return (
    <>
      <TextField
        value={ name }
        onChange={e => setName(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <div> My name is { name }</div>
      <div>I rendered { renderCount.current } times</div>
    </>
  )
}

export default UseRefTest