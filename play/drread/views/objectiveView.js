const objectiveHtmlElement = (function () {
  const objectiveHtmlElement = document.createElement("div");
  objectiveHtmlElement.classList.add("tile");
  objectiveHtmlElement.classList.add("objective");

  const objectiveImage = document.createElement("img");
  objectiveImage.setAttribute("src", "./images/book.png");
  objectiveImage.setAttribute("alt", "Mighty Grimoire");
  objectiveHtmlElement.appendChild(objectiveImage);

  return objectiveHtmlElement;
})();
