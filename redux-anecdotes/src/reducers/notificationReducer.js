import { createSlice } from "@reduxjs/toolkit";

const notificationAtStart = "Welcome to Anecdote";

const initialState = notificationAtStart;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setCreatedNotification(state, action) {
      return `You created the anecdote  ${action.payload}`;
    },
    setVotedNotification(state, action) {
      return `You voted '${action.payload}'`;
    },
    resetNotification() {
      return notificationAtStart;
    },
  },
});

export const {
  setVotedNotification,
  setCreatedNotification,
  resetNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
