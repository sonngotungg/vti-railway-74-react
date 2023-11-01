import React from 'react'

const exampleList = [
    'react-router-dom',
    'form',
    'axios',
    'lifecycle',
    'component communication',
    'static web',
    'hooks',
    'JSX'
]

const reactSummary = `
    - React 
    - React component & React Element --> Virtual DOM
    - React component
    state&props; one-way binding & two-way binding
    lifcycle
    when react component render
    hooks (useState, useEffect, useRef, useReducer)
    component communication

    Material UI
    react-router-dom
    axios
`

const Introduction = () => {
  return (
    <>
        <div>Introduction</div>
        <p>Contents</p>
        <ol>
          {
            exampleList.map(title => <li>{title}</li>)
        }  
        </ol>
        
        <pre>{reactSummary}</pre>
    </>
  )
}

export default Introduction