import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [memoes, setMemoes] = useState(null);
  const fetcher = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);
    setMemoes(data);
    return data;
  };

  useEffect(() => {
    fetcher();
  }, []);

  console.log(process.env.REACT_APP_API_URL);

  const [title, setTitle] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const memoDto = {
      title,
    };

    await axios.post(`${process.env.REACT_APP_API_URL}/todos`, memoDto);
    fetcher();
  };

  return (
    <div className="App">
      {memoes?.map((memo) => (
        <div key={memo.id}>{memo.title}</div>
      ))}
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <button>메모 추가하기</button>
        </form>
      </div>
    </div>
  );
}

export default App;
