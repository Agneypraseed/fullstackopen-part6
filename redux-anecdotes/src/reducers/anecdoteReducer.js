import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState:[],
  reducers: {
    createAnecdote(state, action) {
      return [...state, ...[action.payload].map(asObject)];
    },
    voteAnecdote(state, action) {           
      const id = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      const newState = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
      return newState.sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes(state,action){
      return action.payload
    }
  },
});

export const { voteAnecdote, createAnecdote,setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
