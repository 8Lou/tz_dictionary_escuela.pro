import React, { useState } from 'react';
import WordList from './WordList';
import WordForm from './WordForm';
import { Word } from '../types/types';
import { Button } from '@mui/material';


const AdminPanel: React.FC = () => {

  const [words, setWords] = useState<Word[]>([]);

  // Обработчики событий управления списком слов
  const handleEdit = (index: number) => {
    // редактирования слова
  };

  const handleDelete = (index: number) => {
    // удаления слова
  };

  const handleAdd = () => {
    // добавления нового слова
    const newWord = { spanish: 'Hola', russian: 'Привет', english: 'Hello' }; // Пример нового слова
    setWords([...words, newWord]);
  };

  const handleSave = (word: Word) => {
    // сохранения нового слова
    setWords([...words, word]);
  };

  return (
    <div>
      {/* Кнопка для добавления нового слова */}
      {/* <Button onClick={handleAdd}>Add Word</Button> */}

      {/* Компонент для отображения списка слов */}
      <WordList words={words} onEdit={handleEdit} onDelete={handleDelete} onAdd={handleAdd} />
      {/* Форма для добавления или редактирования слова */}
      <WordForm onSaveWord={handleSave} />
    </div>
  );
}

export default AdminPanel;