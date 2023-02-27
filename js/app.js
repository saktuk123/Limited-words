// Selectors....
const myText = document.querySelector("#my-text");
const result = document.querySelector("#result");

let limit = 50;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", () => {
  let textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "red";
    result.style.color = "red";
  } else {
    myText.style.borderColor = "#12c112";
    result.style.color = "#12c112";
  }
});
