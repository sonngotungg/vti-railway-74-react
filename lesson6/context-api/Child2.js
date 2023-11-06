import React, { useContext } from 'react'
import { Context } from './ContextProvider'

const Child2 = () => {
  const {state, setState} = useContext(Context)
  console.log('child 2')

  return (
    <>
        <div>Child2: {state}</div>
        <button onClick={() => setState('child 2')}>Update State</button>
    </>
  )
}

export default Child2