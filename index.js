import sayHello from "./js/sayHello.js";
import Card from "./components/card.js";

/* Show / Hide Answer */
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
let isShowAnswerVisible = true;

showAnswerButton.addEventListener("click", () => {
  const txtElem = document.querySelector(".card");
  const textAnswerField = document.querySelector('[data-js="antwortParagaph"]');

  textAnswerField.classList.toggle("is-visible");

  // zweite Option mit innerText
  console.log(showAnswerButton.innerText);

  isShowAnswerVisible = !isShowAnswerVisible;
  showAnswerButton.innerText = isShowAnswerVisible
    ? "Show Answer"
    : "Hide Answer";

  // if (showAnswerButton.childNodes[0].nodeValue === "Show Answer") {
  //   showAnswerButton.childNodes[0].nodeValue = "Hide Answer";
  // } else {
  //   showAnswerButton.childNodes[0].nodeValue = "Show Answer";
  // }
});

console.clear();
/* Bookmark */
//const setBookmarkButton = document.querySelector("[]");
sayHello();
