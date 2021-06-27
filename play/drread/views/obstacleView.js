function createObstacleHtmlElement() {
  const obstacleHtmlElement = document.createElement("div");
  obstacleHtmlElement.classList.add("tile");
  obstacleHtmlElement.classList.add("obstacle");

  const obstacleImage = document.createElement("img");
  obstacleImage.setAttribute("src", "./images/tree.png");
  obstacleImage.setAttribute("alt", "obstacle");
  obstacleHtmlElement.appendChild(obstacleImage);

  return obstacleHtmlElement;
}
