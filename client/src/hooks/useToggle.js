import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useToggle = (key, target) => {
  const [value, setValue] = useLocalStorage(key, false);

  useEffect(() => {
    const container = document.querySelector(`.${target}`);
    if (value) {
      container.classList.add("toggled");
    } else {
      container.classList.remove("toggled");
    }
  }, [value]);

  const setter = e => {
    e.preventDefault();
    setValue(!value);
  };

  return [value, setter];
};
