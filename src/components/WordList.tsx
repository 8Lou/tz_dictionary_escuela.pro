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
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* button for adding new word */}
      <button onClick={onAdd}>Add New Word</button>
    </div>
  );
}

export default WordList;
