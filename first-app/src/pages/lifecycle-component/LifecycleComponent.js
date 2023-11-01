import React, { Component, useEffect, useLayoutEffect, useState } from 'react';

// Lifecycle
// When React component render

// Class component
export class LifecycleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!',
    };
    console.log('Constructor called');
  }

  // Called after the component is inserted into the DOM
  componentDidMount() {
    console.log('ComponentDidMount called');
  }

  // Called whenever the component's props or state change
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate called');
  }

  // Called before the component is removed from the DOM
  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
  }

  render() {
    console.log('Render called');
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.setState({ message: 'Updated message' })}>
          Update Message
        </button>
      </div>
    );
  }

  renderMessage() {
    console.log('Render Message called');
    return <p>{this.state.message}</p>;
  }

  // Determines whether the component should update
  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate called');
    return true;
  }

  // Allows the component to capture information before a change in the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('GetSnapshotBeforeUpdate called');
    return 'Snapshot Value';
  }

  // Used to update the component's state based on props
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('GetDerivedStateFromProps called');
    return null;
  }

  // Catches errors in child components
  componentDidCatch(error, info) {
    console.log('ComponentDidCatch called');
  }
}

export const LifecycleFunctionalComponent = () => {
  const [count, setCount] = useState(0)
  console.log('before render 1')

  useLayoutEffect(() => {
    console.log('after render but before screen updating')
  }, [])

  useEffect(() => {
    console.log('after render - every update')   
  })

  useEffect(() => {
    console.log('after render - only 1 time after mounting')
    // goi api
    // add event handler
    //setInterval(callback, 1000)
  }, [])

  useEffect(() => {
    console.log('after render - every time count updated')
  }, [count])

  return (
    <div>
      {console.log('render')}
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Add</button>
      <button onClick={() => setCount(count-1)}>Subtract</button>
    </div>
  )
}