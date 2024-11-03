// src/components/ShoppingList.js
import React, { useState } from 'react';

function ShoppingList({ currentUser, lists }) {
  const [selectedList, setSelectedList] = useState(lists[0]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "" });

  const isOwner = selectedList.owner === currentUser;
  const isMember = selectedList.members.includes(currentUser);

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity) {
      setSelectedList({
        ...selectedList,
        items: [...selectedList.items, { id: Date.now(), ...newItem }]
      });
      setNewItem({ name: "", quantity: "" });
    }
  };

  const handleDeleteItem = (id) => {
    if (isOwner || isMember) {
      setSelectedList({
        ...selectedList,
        items: selectedList.items.filter(item => item.id !== id)
      });
    } else {
      alert("Yetkiniz yok!");
    }
  };

  return (
    <div className="container" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px' }}>
      <h2>{selectedList.title}</h2>
      <ul>
        {selectedList.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            {(isOwner || isMember) && (
              <button onClick={() => handleDeleteItem(item.id)}>Sil</button>
            )}
          </li>
        ))}
      </ul>
      {isOwner && (
        <div>
          <input
            type="text"
            placeholder="Ürün adı"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Miktar"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          />
          <button onClick={handleAddItem}>Ekle</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
