import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../server/anecdoteContoller";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
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
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll();
    dispatch(setAnecdotes(notes));
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const { voteAnecdote, setAnecdotes, appendAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
