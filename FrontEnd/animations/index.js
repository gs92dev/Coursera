const button = document.getElementById("button");
const nav = document.getElementById("nav");
console.log(nav);
button.onclick = (e) => {
  e.preventDefault();
  console.log("button clicked");
  nav.classList.toggle("translate");
};
