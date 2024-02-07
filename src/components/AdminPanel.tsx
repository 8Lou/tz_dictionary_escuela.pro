import React, { useState } from 'react';
import WordList from './WordList';
import WordForm from './WordForm';
import { Word } from '../types/types';
import { Button } from '@mui/material';


const AdminPanel: React.FC = () => {

  const [words, setWords] = useState<Word[]>([]);

  // Обработчики событий управления списком слов
  const handleEdit = (index: number) => {};

  const handleDelete = (index: number) => {};

  const handleAdd = () => {
    const newWord = { spanish: 'Hola', russian: 'Привет', english: 'Hello' }; // Пример нового слова
    setWords([...words, newWord]);
  };

  const handleSave = (word: Word) => {
    setWords([...words, word]);
  };

  return (
    <div>
      {/* <Button onClick={handleAdd}>Add Word</Button> */}
      <WordList words={words} onEdit={handleEdit} onDelete={handleDelete} onAdd={handleAdd} />
      
      <WordForm onSaveWord={handleSave} />
    </div>
  );
}

export default AdminPanel;