import React from 'react';
import './index.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AdminPanel from './components/AdminPanel';
import WordListDisplay from './components/WordListDisplay';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">     
      </header>
      <div>
      <h1>Административное Приложение для Управления Словарями
</h1>
        <WordListDisplay />
        <AdminPanel />
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
