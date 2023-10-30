// State & Props
// React components communication
        // 1. send data from Parent to Child
        // 2. send data from Child to Parent
        // 3. allow Child to update Parent State
// import & export ES6

import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (newMessage) => {
      setMessage(newMessage);
    };

    const handleChildData = (childData) => {
        console.log({childData})
    }
  
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Message: {message}</p>
       
        <ChildComponent
            parentData={message}
            sendDataFromChildToParent={handleChildData} 
            onMessageChange={handleMessageChange} 
        />
      </div>
    );
  }