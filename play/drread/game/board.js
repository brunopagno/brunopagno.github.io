class Board {
  constructor(level) {
    this.level = level;

    this.grid = [];
    let y = 0;
    this.level.forEach((row) => {
      let x = 0;
      const gridRow = [];
      row.forEach((element) => {
        switch (element) {
          case 0: // empty space
            gridRow.push(new EmptySpace());
            break;
          case 1: // hero
            const hero = new Hero(x, y, 12, new Dice(6), this);
            gridRow.push(hero);
            break;
          case 2: // monster
            const monster = new Monster(x, y, 3, new Dice(4), this);
            gridRow.push(monster);
            break;
          case 3: // objective
            gridRow.push(new Objective());
            break;
          case 4: // obstacle
            gridRow.push(new Obstacle());
            break;
          default:
            throw new Error("Trying to insert unknown object on the grid");
        }
        x += 1;
      });
      this.grid.push(gridRow);
      y += 1;
    });
  }

  getGrid() {
    return this.grid;
  }

  getHero() {
    let result = null;
    this.grid.forEach((row) => {
      row.forEach((element) => {
        if (element instanceof Hero) {
          result = element;
          return;
        }
      });
    });
    return result;
  }

  getAllMonsters() {
    let result = [];
    this.grid.forEach((row) => {
      row.forEach((element) => {
        if (element instanceof Monster) {
          result.push(element);
          return;
        }
      });
    });
    return result;
  }

  getXY(x, y) {
    if (this.grid[y] && this.grid[y][x]) {
      return this.grid[y][x];
    }
    return null;
  }

  updatePosition(character, targetX, targetY) {
    this.grid[character.y][character.x] = new EmptySpace();
    this.grid[targetY][targetX] = character;
    character.x = targetX;
    character.y = targetY;
  }
}
