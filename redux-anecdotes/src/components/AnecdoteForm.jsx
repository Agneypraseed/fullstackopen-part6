import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const anecdote = event.target[0].value;
    event.target[0].value = "";
    dispatch(createAnecdote(anecdote));
    dispatch(
      setNotification(`you created new anecdote '${anecdote}'`, 10)
    );
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
