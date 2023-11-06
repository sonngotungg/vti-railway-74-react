import React from 'react';
import MyComponent from './MyComponent';
import ContextProvider from './ContextProvider';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <MyComponent />
      </div>
    </ContextProvider>
  );
}

export default App;
