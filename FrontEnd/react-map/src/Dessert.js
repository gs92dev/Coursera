export default function Dessert(props) {
  const newDesserts = props.data.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(),
      description: dessert.description,
      kCal: dessert.calories / 1000,
    };
  });
  return <div>${newDesserts}</div>;
}
