import { createContext, useReducer } from "react";
import { useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CREATED":
      return `you created anecdote '${action.content}'`;
    case "VOTED":
      return `anecdote '${action.content} voted`;
    case "DEFAULT":
      return "WELCOME TO ANECDOTE";
    case "FAILED":
      return "too short anecdote, must have length 5 or more";
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const useNotificationValue = () => {
  const counterAndDispatch = useContext(NotificationContext);
  return counterAndDispatch[0];
};

export const useNotificationDispatch = () => {
  const counterAndDispatch = useContext(NotificationContext);
  return counterAndDispatch[1];
};

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    "WELCOME TO ANECDOTE"
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
