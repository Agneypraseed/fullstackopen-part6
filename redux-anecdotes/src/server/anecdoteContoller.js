import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnecdote = async (data) => {
  const newAnecdote = { content: data, votes: 0 };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const voteAnecdote = async (id, updatedAnecode) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecode);  
  return response.data;
};

export default { getAll, createAnecdote, voteAnecdote };
