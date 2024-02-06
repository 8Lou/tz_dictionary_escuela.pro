import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { RootState} from '../store/rootReducer'; // Укажите путь к вашему корневому редьюсеру
import { loadWordLists } from '../store/wordListsSlice';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const wordLists = useSelector((state: RootState) => state.wordLists); 
  // const wordLists = useSelector((state: any) => state.wordLists);


  useEffect(() => {
    dispatch({type: 'loadWordLists'});
  }, [dispatch]);

  return (
    <div>
      {/* Здесь ваш код для отображения списка слов, когда он будет загружен */}
    </div>
  );
}

export default HomePage;
