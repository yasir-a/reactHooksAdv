import React, { useState } from "react";

const UseStateWithArrays = () => {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    const renderedItems = items.map((item, i) => {
      return <li key={i}>{item.value}</li>;
    });
    return renderedItems;
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  return (
    <div>
      <ul>{renderItems()}</ul>
      <button onClick={addItem}>Add Items</button>
    </div>
  );
};

export default UseStateWithArrays;
