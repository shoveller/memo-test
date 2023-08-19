import { useState } from "react";
import "./App.css";

const 장식 = () => {
  console.log("장식 리랜더");
  return <>장식입니다.</>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <장식 />
    </div>
  );
}

export default App;
