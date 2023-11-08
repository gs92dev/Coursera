import "./transitioning.css";
export default function Transition() {
  const list = ["Guilherme", "Daniel", "John", "Gustavo", "leandro"];
  const newArray = list.map((element, index) => {
    return <div key={index}>{element}</div>;
  });
  return (
    <div>
      <p>Hello world</p>
      <div>{newArray}</div>      
    </div>
  );
}
