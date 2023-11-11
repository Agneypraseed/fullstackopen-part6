import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import {
  resetNotification,
  setCreatedNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../server/anecdoteContoller";

function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const anecdote = event.target[0].value;
    event.target[0].value = "";
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);    
    dispatch(createAnecdote(newAnecdote));
    dispatch(setCreatedNotification(anecdote));
    setTimeout(() => {
      dispatch(resetNotification());
    }, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input required />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
