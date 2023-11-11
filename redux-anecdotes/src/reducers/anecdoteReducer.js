import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState:[],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload];
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
