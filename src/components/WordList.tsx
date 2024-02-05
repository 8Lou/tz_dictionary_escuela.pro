import { Button } from '@mui/material';
import React from 'react';

interface Word {
  spanish: string;
  russian: string;
  english: string;
}

interface Props {
  words: Word[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onAdd: () => void; // Обработчик для добавления нового слова
}

const WordList: React.FC<Props> = ({ words, onEdit, onDelete, onAdd }) => {

  return (
    <div>
      <h2>List of Words</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>
            {word.spanish} - {word.russian} - {word.english}
            <Button variant="contained" color="primary" onClick={() => onEdit(index)}>Edit</Button>
            <Button variant="contained" color="primary" onClick={() => onDelete(index)}>Delete</Button>
          </li>
        ))}
      </ul>
      {/* button for adding new word */}
      <Button variant="contained" color="primary" onClick={onAdd}>Add New Word</Button>
    </div>
  );
}

export default WordList;
