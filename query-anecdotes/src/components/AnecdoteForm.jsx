import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../server/requests";
import { useNotificationDispatch } from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();

  const newNoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
      const { content } = data;
      dispatch({ type: "CREATED", content });
      setTimeout(() => {
        dispatch({ type: "DEFAULT" });
      }, 5000);
    },
    onError: () => {
      dispatch({ type: "FAILED" });
      setTimeout(() => {
        dispatch({ type: "DEFAULT" });
      }, 5000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    newNoteMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
