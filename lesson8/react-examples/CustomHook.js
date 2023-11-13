import React, { useState, useMemo } from 'react';

function useSearch(initialItems) {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState(initialItems);
  
    const filteredItems = useMemo(() => {
      return items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [items, searchQuery]);
  
    const handleSearch = (query) => {
      setSearchQuery(query);
    };
  
    return {
      searchQuery,
      handleSearch,
      filteredItems,
    };
  }


function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear'];
  const { searchQuery, handleSearch, filteredItems } = useSearch(items);

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
