const button = document.getElementById("button");
const nav = document.getElementById("nav");
console.log(nav);
button.onclick = (e) => {
  e.preventDefault();
  if (nav.classList.contains("translate")) {
    console.log("translate");
    nav.classList.remove("translate");
    nav.classList.add("translate2");
  } else {
    nav.classList.remove("translate2");
    nav.classList.add("translate");
  }
};
