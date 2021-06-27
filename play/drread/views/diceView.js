function createDiceAnimationHtmlElement() {
  const diceHtmlElement = document.createElement('div');
  diceHtmlElement.classList.add('dice');
  diceHtmlElement.classList.add('diceanimation');
  return diceHtmlElement;
}

function createDiceResultHtmlElement(diceResult) {
  const diceHtmlElement = document.createElement('div');
  diceHtmlElement.classList.add('dice');
  const image = document.createElement('img');
  image.setAttribute('src', './images/d6.png');
  diceHtmlElement.appendChild(image);
  const resultHtmlElement = document.createElement('span');
  resultHtmlElement.innerText = diceResult;
  diceHtmlElement.appendChild(resultHtmlElement);
  return diceHtmlElement;
}
