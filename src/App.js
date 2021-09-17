import { useState } from "react";
import "./App.css";
import Card from "./components/Cards";
import Search from "./components/Search";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Search setList={setList} list={list} />
      {list.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
