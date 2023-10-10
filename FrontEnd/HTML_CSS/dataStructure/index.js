//for Each
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index} ${fruit}`);
}
fruits.forEach(appendIndex);
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index} ${veggie}`);
});

//filter
const nums = [0, 10, 20, 30, 40, 50];
console.log(
  nums.filter(function (num) {
    return num > 20;
  })
);
//map
let mapUse = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(mapUse);

//Converting objects to arrays
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//Map structure
let bestBoxers = new Map();
// to include an element in the map we need to use the set method
bestBoxers.set("first", "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
//to get just one element from the Map we need to use the get method
let first = bestBoxers.get("first"); // 'The Champion'
console.log(first);

// Set
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
/*
Other data structures in JavaScript
Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

Queues

Linked lists (singly-linked and doubly-linked)

Trees

Graphs

For resources on building these data structures, please refer to the additional reading. */
