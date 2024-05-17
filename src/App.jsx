import React, { useMemo } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import useDarkMode from './useDarkMode';

function App() {
  const darkMode = useDarkMode(true);

  // Wrap the darkMode object in useMemo to memoize it
  const contextValue = useMemo(() => ({ darkMode }), [darkMode]);

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
