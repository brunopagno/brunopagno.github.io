const Draw = (function () {
  class DrawClass {
    constructor() {
      this.skipMonsters = true;
    }

    init(htmlParentElement, overlayHtmlElement, rootHtmlElement) {
      this.htmlParentElement = htmlParentElement;
      this.overlayHtmlElement = overlayHtmlElement;
      this.rootHtmlElement = rootHtmlElement;
    }

    // gambiarra
    async invokeDiceAnimation(diceResult, attacker, defender) {
      this.overlayHtmlElement.classList.remove("hide");

      const attackerHtmlElement = document.getElementById(attacker.id);
      attackerHtmlElement.classList.add("attacker");
      const defenderHtmlElement = document.getElementById(defender.id);
      defenderHtmlElement.classList.add("defender");
      const hitAnimationElm = defenderHtmlElement.querySelector(".hit");
      hitAnimationElm.classList.remove("hide");

      const diceContainer = document.createElement("div");
      diceContainer.classList.add("dice_container");
      this.rootHtmlElement.append(diceContainer);

      const diceAnimation = createDiceAnimationHtmlElement();
      diceContainer.append(diceAnimation);
      await new Promise((r) => setTimeout(r, 800));
      diceAnimation.remove();
      const diceResultElement = createDiceResultHtmlElement(diceResult);
      diceContainer.append(diceResultElement);
      await new Promise((r) => setTimeout(r, 1500));
      diceResultElement.remove();

      diceContainer.remove();

      attackerHtmlElement.classList.remove("attacker");
      defenderHtmlElement.classList.remove("defender");
      hitAnimationElm.classList.add("hide");
    }

    updateAndDraw() {
      // update all monsters
      if (this.skipMonsters) {
        this.skipMonsters = false;
      } else {
        this.overlayHtmlElement.classList.remove("hide");

        const self = this;
        function doTheThing(allMonsters, index) {
          setTimeout(async () => {
            if (allMonsters[index]) {
              await allMonsters[index].act(State.hero);
              self._executeDraw();
              doTheThing(allMonsters, index + 1);
            } else {
              self.overlayHtmlElement.classList.add("hide");
            }
          }, 100);
        }

        const allMonsters = State.allMonsters;
        doTheThing(allMonsters, 0);
      }

      // actually draw
      this._executeDraw();
    }

    _executeDraw() {
      // check current game state
      State.checkState();

      // clear screen
      this.htmlParentElement.innerHTML = "";

      // draw appropriate view
      switch (State.state) {
        case GAME_STATE.IN_GAME:
          boardView(this.htmlParentElement);
          break;
        case GAME_STATE.VICTORY:
          victoryView(this.htmlParentElement);
          break;
        case GAME_STATE.GAME_OVER:
          gameOverView(this.htmlParentElement);
          break;
      }
    }
  }

  return new DrawClass();
})();
