import { useState } from "react";

function ChildComponent({ 
  parentData,
  sendDataFromChildToParent,
  onMessageChange
}) {

    const [count, setCount] = useState(0)     // state

    const handleInputChange = (e) => {
      const newMessage = e.target.value;
      onMessageChange(newMessage); // Communicate with the parent
    };

    console.log({parentData})
  
    return (
      <div>
        <h2>Child Component</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>Add</button>
        <button onClick={() => setCount(count-1)}>Subtract</button>
        <button onClick={() => sendDataFromChildToParent(count)}>Send To Parent</button>
        <input
          type="text"
          value={parentData}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
      </div>
    );
}

export default ChildComponent