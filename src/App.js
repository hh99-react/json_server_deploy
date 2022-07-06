import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [memoes, setMemoes] = useState(null);
  const fetcher = async () => {
    const { data } = await axios.get("http://localhost:3001/memo");
    setMemoes(data);
    return data;
  };

  useEffect(() => {
    fetcher();
  }, []);

  console.log(memoes);
  return (
    <div className="App">
      {memoes?.map((memo) => (
        <div key={memo.id}>{memo.title}</div>
      ))}
    </div>
  );
}

export default App;
