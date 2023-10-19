export function Heading({ firstName }) {
  return firstName.map(function (name, index) {
    console.log(index);
    return <h1 key={index}>Hello, {name}</h1>;
  });
}
