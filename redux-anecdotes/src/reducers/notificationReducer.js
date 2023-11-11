import { createSlice } from "@reduxjs/toolkit";

const notificationAtStart = "Welcome to Anecdote";

const initialState = notificationAtStart;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      return action.payload;
    },
    resetNotification() {
      return notificationAtStart;
    },
  },
});

export const setNotification = (content, time) => {
  return (dispatch) => {
    dispatch(createNotification(content));
    setTimeout(() => {
      dispatch(resetNotification());
    }, time * 1000);
  };
};

export const {
  createNotification,
  setVotedNotification,
  setCreatedNotification,
  resetNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
