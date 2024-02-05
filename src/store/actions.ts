export const ADD_WORD_REQUEST = 'ADD_WORD_REQUEST';
   export const addWordSuccess = (word: string) => ({ 
    type: 'ADD_WORD_SUCCESS', payload: word });
    
   export const addWordFailure = (error: string) => ({ 
    type: 'ADD_WORD_FAILURE', payload: error });