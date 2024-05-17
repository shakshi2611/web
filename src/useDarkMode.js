import { useState } from 'react';

const useDarkMode = (initialValue = false) => {
  const [darkMode, setDarkMode] = useState(initialValue);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return { value: darkMode, toggle: toggleDarkMode };
};

export default useDarkMode;
