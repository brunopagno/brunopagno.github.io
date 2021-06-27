const hero_moveUpAction = async () => {
  await State.hero.moveUp();
  Draw.updateAndDraw();
};

const hero_moveDownAction = async () => {
  await State.hero.moveDown();
  Draw.updateAndDraw();
};

const hero_moveLeftAction = async () => {
  await State.hero.moveLeft();
  Draw.updateAndDraw();
};

const hero_moveRightAction = async () => {
  await State.hero.moveRight();
  Draw.updateAndDraw();
};

let _heroHtmlElementInstance = null;

function getHeroHtmlElement(character) {
  if (!_heroHtmlElementInstance) {
    const heroHtmlElement = document.createElement("div");
    heroHtmlElement.classList.add("tile");
    heroHtmlElement.classList.add("hero");
    heroHtmlElement.setAttribute("id", character.id);

    const heroHealth = document.createElement("span");
    heroHealth.innerText = character.life;
    heroHealth.setAttribute("id", "hero_health");
    heroHealth.classList.add("character_health");
    heroHtmlElement.appendChild(heroHealth);

    const heroImage = document.createElement("img");
    heroImage.setAttribute("src", "./images/drread.png");
    heroImage.setAttribute("alt", "Dr.read");
    heroHtmlElement.appendChild(heroImage);

    const hitAnimation = document.createElement("div");
    hitAnimation.classList.add("hit");
    hitAnimation.classList.add("hit_animation");
    hitAnimation.classList.add("hide");
    heroHtmlElement.appendChild(hitAnimation);

    const moveUp = document.createElement("button");
    moveUp.classList.add("up");
    let arrow = document.createElement("img");
    arrow.setAttribute("src", "./images/arrow.png");
    moveUp.appendChild(arrow);
    heroHtmlElement.appendChild(moveUp);
    moveUp.onclick = hero_moveUpAction;

    const moveDown = document.createElement("button");
    moveDown.classList.add("down");
    arrow = document.createElement("img");
    arrow.setAttribute("src", "./images/arrow.png");
    moveDown.appendChild(arrow);
    heroHtmlElement.appendChild(moveDown);
    moveDown.onclick = hero_moveDownAction;

    const moveLeft = document.createElement("button");
    moveLeft.classList.add("left");
    arrow = document.createElement("img");
    arrow.setAttribute("src", "./images/arrow.png");
    moveLeft.appendChild(arrow);
    heroHtmlElement.appendChild(moveLeft);
    moveLeft.onclick = hero_moveLeftAction;

    const moveRight = document.createElement("button");
    moveRight.classList.add("right");
    arrow = document.createElement("img");
    arrow.setAttribute("src", "./images/arrow.png");
    moveRight.appendChild(arrow);
    heroHtmlElement.appendChild(moveRight);
    moveRight.onclick = hero_moveRightAction;

    _heroHtmlElementInstance = heroHtmlElement;
  } else {
    const healthBarHtmlElement = _heroHtmlElementInstance.querySelector('#hero_health')
    healthBarHtmlElement.innerText = character.life;
  }

  return _heroHtmlElementInstance;
}

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowLeft":
//       hero_moveLeftAction();
//       break;
//     case "ArrowUp":
//       hero_moveUpAction();
//       break;
//     case "ArrowRight":
//       hero_moveRightAction();
//       break;
//     case "ArrowDown":
//       hero_moveDownAction();
//       break;
//   }
// });
