import { useState } from "react";
import { reverse } from "./helpers";

function App() {
  const [name, setName] = useState("Nicolas");

  function Title() {
    return <h1 className="title">Welcome, {name}!</h1>;
  }

  function NameLength() {
    return (
      <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
    );
  }

  function NameReversed() {
    return (
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    );
  }
  return (
    <div className="app">
      <Title />
      <NameLength />
      <NameReversed />
    </div>
  );
}

export default App;
