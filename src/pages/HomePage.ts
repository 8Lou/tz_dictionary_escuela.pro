import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadWordLists  } from '../store/wordListsSlice'; // Подставьте действие для загрузки списка слов

function HomePage () {
  const dispatch = useDispatch();
  const wordLists = useSelector((state: any) => state.wordLists); // Подставьте название вашего редьюсера

  useEffect(() => {
    dispatch(loadWordLists());
  }, [dispatch]);

  return (
    <div></div>
  );
}

export default HomePage;