import { createSlice } from "@reduxjs/toolkit";

const notificationAtStart = "Welcome to Anecdote";

const initialState = notificationAtStart;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getNotification(state, action) {
      return state;
    },
  },
});

export default notificationSlice.reducer;
