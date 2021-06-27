const victoryView = (function() {
  return function view(htmlParentElement) {
    const victoryHtmlElement = document.createElement('img');
    victoryHtmlElement.setAttribute("src", "./images/victory.jpg");
    htmlParentElement.append(victoryHtmlElement);
  }
})();