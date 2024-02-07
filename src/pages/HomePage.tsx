import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { RootState} from '../store/rootReducer';
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
      </div>
  );
}

export default HomePage;
