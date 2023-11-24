'use client'

import React, { useState, useEffect } from 'react'

const UseEffectTest = () => {

let [resourceType, setResourceType] = useState( () => 'Posts' )

console.log('Component Render')

useEffect(() => {
  console.log('onMount')
}, [])

  return (
    <>
      <div>
        <button className='border-2 border-slate-950 p-2 mr-2' onClick={ () => setResourceType('Posts') }>posts</button>
        <button className='border-2 border-slate-950 p-2 mr-2' onClick={ () => setResourceType('Users') }>users</button>
        <button className='border-2 border-slate-950 p-2' onClick={ () => setResourceType('Comments') }>comments</button>
      </div>
      <h1 className='font-bold'>{ resourceType }</h1>
    </>
  )
}

export default UseEffectTest