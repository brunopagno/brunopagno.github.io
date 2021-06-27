GAME_STATE = {
  IN_GAME: 'IN_GAME',
  VICTORY: 'VICTORY',
  GAME_OVER: 'GAME_OVER',
};

const State = (function () {
  function loadLevel(level) {
    return LEVEL_1;
  }

  class StateClass {
    constructor() {
      this._currentLevel = 1;
      this._state = GAME_STATE.IN_GAME;

      this._level = loadLevel(this._currentLevel);
      this._board = new Board(this._level);

      this._hero = this.board.getHero();
    }

    checkState() {
      if (this._hero.isDead()) {
        console.log("the hero is in fact dead");
        this._state = GAME_STATE.GAME_OVER;
        return;
      }

      const grid = this._board.getGrid();
      for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
          const tile = row[j];
          if (tile instanceof Monster && tile.isDead()) {
            row[j] = new EmptySpace();
          }
        }
      }

      let hasObjectives = false;
      grid.forEach(row => {
        row.forEach(tile => {
          if (tile instanceof Objective) {
            hasObjectives = true;
          }
        })
      });
      if (!hasObjectives) {
        this._state = GAME_STATE.VICTORY;
        return;
      }
    }

    get state() {
      return this._state;
    }

    get board() {
      return this._board;
    }

    get hero() {
      return this._hero;
    }

    get allMonsters() {
      return this.board.getAllMonsters();
    }
  }

  return new StateClass();
})();
