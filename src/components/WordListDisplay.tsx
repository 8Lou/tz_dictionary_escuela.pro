import { Button } from '@mui/material';
import React, { useState } from 'react';

const WordListDisplay: React.FC = () => {
  // Состояние для отслеживания списка слов
  const [wordLists, setWordLists] = useState([
    { id: 1, title: "Семейство", words: ["Padre - Отец - Father", "Madre - Мать - Mother"] },
    { id: 2, title: "Цвета", words: ["Rojo - Красный - Red", "Verde - Зеленый - Green"] },
    // другие списки слов
  ]);

  // Логика для добавления нового списка слов
  const handleAddWordList = () => {
    // Реализация логики добавления нового списка слов
  };

  // Логика для редактирования списка слов
  const handleEditWordList = (id: number) => {
    // Реализация логики редактирования списка слов по его id
  };

  // Логика для удаления списка слов
  const handleDeleteWordList = (id: number) => {
    // Реализация логики удаления списка слов по его id
  };

  return (
    <div>
      <h2>Списки слов</h2>
      {/* Отображение списка существующих списков слов */}
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
            {/* Кнопки для редактирования и удаления списка слов */}
            <Button onClick={() => handleEditWordList(list.id)}>Редактировать</Button>
            <Button onClick={() => handleDeleteWordList(list.id)}>Удалить</Button>
          </li>
        ))}
      </ul>
      {/* Кнопка для добавления нового списка слов */}
      <Button variant="contained" color="primary" onClick={handleAddWordList}>Добавить новый список слов</Button>
    </div>
  );
}

export default WordListDisplay;
