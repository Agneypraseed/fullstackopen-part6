import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("clicked vote");
    dispatch({
      type: "VOTE",
      payload: {
        id: id,
      },
    });
  };

  const addAnecdote = (event) => {
    event.preventDefault()    
    const anecdote = event.target[0].value    
    event.target[0].value = ''

    dispatch({
      type: "NEW_ANECDOTE",
      payload: {
        content: anecdote,
      },
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
