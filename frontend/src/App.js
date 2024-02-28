import React, {useState} from "react";

function App() {
  const [count, setCount] = useState("hello world");
  return (
    <div className="App">
      <h1 onClick={() => {setCount("Fuck You!!")}}>{count}</h1>
    </div>
  );
}

export default App;
