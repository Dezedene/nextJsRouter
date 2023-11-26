'use client'

import React, { useState, useMemo } from 'react'
import Button from '@mui/material/Button';

const UseMemoTest = () => {

    const [ number, setNumber ] = useState(0)
    const [ dark, setDark ] = useState(false)

    // below we wrap the slow function in useMemo to 'cache'it and stop
    // going through the loop every single time

    const doubleNumber = useMemo(() => {
      return slowFunction(number)
    }, [number])



    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white': 'black'
    }

  return (
    <>
      <input type='number' value={number} onChange= {e => setNumber(parseInt(e.target.value))} />
      <Button variant="outlined" onClick={() => setDark(prevDark => !prevDark)}>Change theme</Button>
      <div style={ themeStyles }>{ doubleNumber }</div>
    </>
  )

  function slowFunction(num: number) {
    console.log('calling slow Function')
    for (let i = 0; i <= 100000000; i += 1) {}
    return num * 2
}
}

export default UseMemoTest