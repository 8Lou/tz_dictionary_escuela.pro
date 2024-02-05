import React, { useState } from 'react';

interface Props {
  onSaveWord: (word: { spanish: string; russian: string; english: string }) => void;
}

const WordForm: React.FC<Props> = ({ onSaveWord }) => {
  const [word, setWord] = useState({ spanish: '', russian: '', english: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWord((prevWord) => ({ ...prevWord, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveWord(word);
    setWord({ spanish: '', russian: '', english: '' }); // сброс формы после сохранения
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="spanish" value={word.spanish} onChange={handleChange} placeholder="Spanish Word" />
      <input type="text" name="russian" value={word.russian} onChange={handleChange} placeholder="Russian Translation" />
      <input type="text" name="english" value={word.english} onChange={handleChange} placeholder="English Translation" />
      <button type="submit">Add Word</button>
    </form>
  );
}

export default WordForm;