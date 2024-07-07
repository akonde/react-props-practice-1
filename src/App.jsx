import { useState } from "react";
import Title from "./Title";
import NameLength from "./NameLength";
import NameReversed from "./NameReversed";

function App(props) {
  const [name, setName] = useState("Nicolas");
  return (
    <div className="app">
      <Title name ={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  );
}

export default App;
