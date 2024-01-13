import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Jokes App</h1>
      <h3>Jokes: {jokes.length}</h3>

      {jokes.map((joke) => (
        <div
          style={{
            border: "1px solid whitesmoke",
            padding: "10px",
            margin: "10px",
            borderRadius: "6px",
          }}
          key={joke.id}
        >
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
