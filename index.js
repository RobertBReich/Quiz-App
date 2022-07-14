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
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const apiUrl = "https://opentdb.com/api.php?amount=10";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => createCards(data.results));

/* create .cards */
function createCards(data) {
  let arrCardData = data;

  const pointerMain = document.querySelector('[data-js="home-main"]');
  pointerMain.innerHTML = "";
  arrCardData.forEach((element) => {
    let xmlDiv = document.createElement("div");
    xmlDiv.innerHTML = htmlTemplate;
    pointerMain.append(xmlDiv);
    xmlDiv.querySelector('[data-js="question"]').innerText = decodeHtml(
      element.question
    );
    xmlDiv.querySelector('[data-js="answer"]').innerText = decodeHtml(
      element.correct_answer
    );

    // Tags
    let xmlTagsAnchor = xmlDiv.querySelector('[data-js="tags"]');
    console.log(element.category);

    let xmlLi = document.createElement("li");
    xmlLi.innerText = element.category;
    xmlTagsAnchor.append(xmlLi);
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
}
