import Card from "./components/card.js";
console.clear();
const htmlTemplate = `<article class="card">
<div class="card-top">
  <div class="bookmark"> 
    <button data-js="bookmark" class="bookmark-button">
    <ion-icon class="active-state" name="bookmark"></ion-icon>
</button>
  </div>
<h2>Question</h2>
<p data-js="question"></p>
</div>
<div class="card-bottom">
<button type="button" class="button" data-js="showAnswerButton">Show Answer</button>
<div class="die-antwort" data-js="antwortParagaph">
  <h3 class="answer" data-js="answer"></h3>
  <p></p>
</div>

<ul class="card-tags" data-js="tags">

</div>
</article>`;

const arrCardData = [
  {
    question: "Welches Land hat die meisten Inseln in der Welt?",
    answer: "Schweden, über 220.000",
    isBookmarked: true,
    tags: ["Geographie", "Schweden", "nicht Norwegen"],
  },
  {
    question: "Wer hat das World Wide Web erfunden, und wann?",
    answer: "Tim Berners-Lee, 1990",
    isBookmarked: false,
    tags: ["www", "Internet"],
  },
  {
    question: "Nenne den ersten Spielfilm von Pixar?",
    answer: "Toy Story, 1995",
    isBookmarked: true,
    tags: ["Animated", "Film & Serien", "Fantasy"],
  },
  {
    question: "Wo ist der tiefste natürliche Ort auf dem Planeten Erde?",
    answer: "Der Marianengraben, 11.034m",
    isBookmarked: false,
    tags: ["Geographie"],
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Die Antwort ist selbstverständlich wie immer: 42!",
    isBookmarked: true,
    tags: ["Film & Serien"],
  },
];

/* create .cards */
const pointerMain = document.querySelector('[data-js="home-main"]');

arrCardData.forEach((element) => {
  let xmlDiv = document.createElement("div");
  xmlDiv.innerHTML = htmlTemplate;
  pointerMain.append(xmlDiv);
  xmlDiv.querySelector('[data-js="question"]').innerText = element.question;
  xmlDiv.querySelector('[data-js="answer"]').innerText = element.answer;

  // Tags
  let xmlTagsAnchor = xmlDiv.querySelector('[data-js="tags"]');
  element.tags.forEach((element) => {
    let xmlLi = document.createElement("li");
    xmlLi.innerText = element;
    xmlTagsAnchor.append(xmlLi);
  });
});

/* Show / Hide Answer */
const showAnswerButtons = document.querySelectorAll(
  '[data-js="showAnswerButton"]'
);
const textAnswerFields = document.querySelectorAll(
  '[data-js="antwortParagaph"]'
);

showAnswerButtons.forEach((ele, index) => {
  const textAnswerField = ele.querySelector('[data-js="antwortParagaph"]');

  ele.addEventListener("click", () => {
    textAnswerFields[index].classList.toggle("is-visible");

    if (ele.innerText == "Show Answer") {
      ele.innerText = "Hide Answer";
    } else {
      ele.innerText = "Show Answer";
    }
  });
});
/* Bookmarks */
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

arrCardData.forEach((element, iterator) => {
  bookmarks[iterator].addEventListener("click", () => {
    console.log(arrCardData);
    if (element.isBookmarked) {
      bookmarks[iterator].classList.remove("is-bookmarked");
      element.isBookmarked = false;
    } else {
      bookmarks[iterator].classList.add("is-bookmarked");
      element.isBookmarked = true;
    }
  });

  if (element.isBookmarked) {
    bookmarks[iterator].classList.add("is-bookmarked");
  }
});
