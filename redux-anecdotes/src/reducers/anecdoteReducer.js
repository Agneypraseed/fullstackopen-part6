import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../server/anecdoteContoller";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {      
      return action.payload.sort((a, b) => b.votes - a.votes);
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const state = getState().anecdote;
    const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
    const updatedAnecdotes = state.map((anecdote) =>
      anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
    );
    dispatch(setAnecdotes(updatedAnecdotes));
    await anecdoteService.voteAnecdote(id, {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    });
  };
};

export const { setAnecdotes, getAllAnecdote, appendAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
