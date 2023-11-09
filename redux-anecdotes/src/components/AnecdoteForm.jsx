import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

function AnecdoteForm() {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const anecdote = event.target[0].value;
    event.target[0].value = "";

    dispatch(createAnecdote(anecdote));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
