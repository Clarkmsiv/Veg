// src/utils/localStorage.js

export const loadFromLocalStorage = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn("Error loading from localStorage", e);
      return undefined;
    }
  };
  
  export const saveToLocalStorage = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (e) {
      console.warn("Error saving to localStorage", e);
    }
  };
  