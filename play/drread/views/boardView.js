const boardView = (function () {
  function createEmptyHtmlElement() {
    const emptyHtmlElement = document.createElement("div");
    emptyHtmlElement.classList.add("tile");
    emptyHtmlElement.classList.add("empty");
    return emptyHtmlElement;
  }

  function boardView(htmlParentElement) {
    // go through the board and draw the current items
    const board = State.board;
    board.getGrid().forEach((row) => {
      row.forEach((element) => {
        let result = null;

        if (element instanceof Hero) {
          result = getHeroHtmlElement(element);
        } else if (element instanceof Monster) {
          result = createMonsterHtmlElement(element);
        } else if (element instanceof Objective) {
          result = objectiveHtmlElement;
        } else if (element instanceof Obstacle) {
          result = createObstacleHtmlElement();
        } else {
          result = createEmptyHtmlElement();
        }

        htmlParentElement.append(result);
      });
    });
  }

  return boardView;
})();
