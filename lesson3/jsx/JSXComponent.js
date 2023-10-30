import React, { useState } from 'react';
import './JSXComponent.css'; // Import the CSS file

function JSXComponent() {
  const [showList, setShowList] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h1>Conditional Rendering, Conditional Styling, and Rendering a List</h1>
      <button onClick={() => setShowList(!showList)}>
        Toggle List
      </button>
      {showList && (
        <ul className="list">
          {items.map((item, index) => (
            <li
              key={index}
              className={index % 2 === 0 ? 'list-item-even' : 'list-item-odd'}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JSXComponent;
