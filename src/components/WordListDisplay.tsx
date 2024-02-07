import { Button } from '@mui/material';
import React, { useState } from 'react';

const WordListDisplay: React.FC = () => {
  const [wordLists, setWordLists] = useState([
    { id: 1, title: "Семейство", words: ["Padre - Отец - Father", "Madre - Мать - Mother"] },
    { id: 2, title: "Цвета", words: ["Rojo - Красный - Red", "Verde - Зеленый - Green"] },
  
  ]);
  
  const handleAddWordList = () => {};

  const handleEditWordList = (id: number) => {};

  const handleDeleteWordList = (id: number) => {    
  };

  return (
    <div>
      <h2>Списки слов</h2>
      <ul>
        {wordLists.map((list) => (
          <li key={list.id}>
            <div>
              <strong>{list.title}</strong>
              <ul>
                {list.words.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
            <Button onClick={() => handleEditWordList(list.id)}>Редактировать</Button>
            <Button onClick={() => handleDeleteWordList(list.id)}>Удалить</Button>
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={handleAddWordList}>Добавить новый список слов</Button>
    </div>
  );
}

export default WordListDisplay;
