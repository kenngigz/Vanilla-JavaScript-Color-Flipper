const colors = [
  "green",
  "red",
  "blue",
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "green",
  "lime",
  "olive",
  "yellow",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
