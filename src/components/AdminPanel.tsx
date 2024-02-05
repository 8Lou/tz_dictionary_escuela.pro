import React, { useState } from 'react';
import WordList from './WordList';
import WordForm from './WordForm';
import { Word } from '../types';


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
      <WordList words={words} onEdit={handleEdit} onDelete={handleDelete} onAdd={handleAdd} />
      <WordForm onSaveWord={handleSave} />
    </div>
  );
}

export default AdminPanel;