import "./App.css";
import { Heading } from "./Heading";
import Card from "./Card";
import Button from "./Button";

let firstName = ["Guilherme", "Daniel", "John"];

function App() {
  return (
    <>
      <Heading firstName={firstName} />
      <Card h2="First card's h2" />
      <Card h3="First card's h3" />
      <Button title="Click me" />
      <Button title="Click me 2" />
    </>
  );
}

export default App;
