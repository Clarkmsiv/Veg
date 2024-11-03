// src/App.js
import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import lists from './data/lists';

function App() {
  const [currentUser, setCurrentUser] = useState("user1"); // Mevcut kullanıcıyı tanımla

  return (
    <div className="App">
      <ShoppingList currentUser={currentUser} lists={lists} />
    </div>
  );
}

export default App;
