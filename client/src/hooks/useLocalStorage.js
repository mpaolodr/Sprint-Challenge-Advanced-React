import { useState } from "react";

const useLocalStorage = (key, initialValue = {}) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item
      ? JSON.parse(item)
      : window.localStorage.setItem(key, JSON.stringify(initialValue));
  });

  const setNewValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setNewValue];
};
