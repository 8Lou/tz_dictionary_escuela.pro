import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/rootReducer';
import WordListDisplay from './components/WordListDisplay';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Создаем хранилище
const store = configureStore({
  reducer: rootReducer,
});

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <h1>Административное Приложение <br/> для Управления Словарями</h1>
          <WordListDisplay />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;