export function Heading({ firstName }) {
  return firstName.map(function (name) {
    return <h1 key={firstName}>Hello, {name}</h1>;
  });
}
