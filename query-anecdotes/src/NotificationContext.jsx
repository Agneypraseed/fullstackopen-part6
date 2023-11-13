import { createContext, useReducer } from "react";
import { useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CREATED":
      return "you created";
    case "VOTED":
      return "you voted";
    case "DEFAULT":
      return "WELCOME";
    default:
      return state;
  }
};

export default notificationReducer;
