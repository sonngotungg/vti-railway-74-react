import React from 'react';
import { ContextProvider } from './ContextProvider';
import Child1 from './Child1';
import Child2 from './Child2';

function App() {
  console.log('my component')

  return (
    <ContextProvider>
      <div className="App">
        <Child1 />
        <Child2 />
      </div>
    </ContextProvider>
  );
}

export default App;
