import "./App.css";
import { Heading } from "./Heading";


let firstName = ["Guilherme","Daniel","John"]

function App() {
  return( 
  <Heading firstName={firstName}/>
  )
}

export default App;
