export default function Dessert(props) {
  const newDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 600;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.title.toUpperCase()} - {dessert.calories} cal
        </li>
      );
    });

  return <div>{newDesserts}</div>;
}
