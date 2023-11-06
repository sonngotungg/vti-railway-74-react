import React, { useContext } from 'react'
import { Context } from './ContextProvider'

const Child1 = () => {
  const {state, setState} = useContext(Context)
  console.log('child 1')
  
  return (
    <>
        <div>Child1: {state}</div>
        <button onClick={() => setState('child 1')}>Update State</button>
    </>
  )
}

export default Child1