export default function Button({ title }) {
  const click = () => console.log("Clicado");
  const over = () => console.log("Mouse is over");
  return (
    <button onClick={click} onMouseOver={over}>
      {title}
    </button>
  );
}
