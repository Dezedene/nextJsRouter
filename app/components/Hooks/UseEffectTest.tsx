'use client'

import React, { useState, useEffect } from 'react'

const UseEffectTest = () => {

let [resourceType, setResourceType] = useState( () => 'Posts' )
let [ items, setItems ] = useState([])
let [ windowWidth, setWindowWidth ] = useState( window.innerWidth )

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
}, [resourceType])

const handleResize = () => {
 setWindowWidth(window.innerWidth)
}

useEffect( () => {
  window.addEventListener('resize', handleResize)

  return () => {
    console.log('unmount')
  }
} )


  return (
    <>
      <div>
        <div className='font-bold'>
          Window Size = { windowWidth }
        </div>
        <div>
          <button className='border-2 border-slate-950 p-2 mr-2' onClick={ () => setResourceType('Posts') }>posts</button>
          <button className='border-2 border-slate-950 p-2 mr-2' onClick={ () => setResourceType('Users') }>users</button>
          <button className='border-2 border-slate-950 p-2' onClick={ () => setResourceType('Comments') }>comments</button>
        </div>

        <h1 className='font-bold'>{ resourceType }</h1>

        { items.map((item, i) => {
          return <pre key={i}>{JSON.stringify(item)}</pre>
        }) }
      </div>
    </>
  )
}

export default UseEffectTest