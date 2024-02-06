import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WordItem {
  id: string;
  word: string;
  translation: string;
}

export interface WordList {
  id: string;
  title: string;
  words: WordItem[];
  coverUrl: string;
}

interface WordListsState {
  wordLists: WordList[];
  loading: boolean;
  error: string | null;
}

const initialState: WordListsState = {
  wordLists: [],
  loading: false,
  error: null,
};

const wordListsSlice = createSlice({
  name: 'wordLists',
  initialState,
  reducers: {
    addWordList(state, action: PayloadAction<WordList>) {
      state.wordLists.push(action.payload);
    },
    editWordList(state, action: PayloadAction<WordList>) {
      const { id, title, words, coverUrl } = action.payload;
      const existingList = state.wordLists.find((list) => list.id === id);
      if (existingList) {
        existingList.title = title;
        existingList.words = words;
        existingList.coverUrl = coverUrl;
      }
    },
    deleteWordList(state, action: PayloadAction<string>) {
      state.wordLists = state.wordLists.filter((list) => list.id !== action.payload);
    },
    loadWordLists(state, action: PayloadAction<WordList[]>) {
      state.wordLists = action.payload;
    },
    wordListsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { addWordList, editWordList, deleteWordList, loadWordLists, wordListsLoading } = wordListsSlice.actions;
export default wordListsSlice.reducer;