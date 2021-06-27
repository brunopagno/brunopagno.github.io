let NEXT_CHARACTER_ID = 1;

class Character {
  constructor(x, y, life, dice, boardReference) {
    this._x = x;
    this._y = y;
    this._life = life;
    this._dice = dice;

    this._board = boardReference;
    
    this._id = NEXT_CHARACTER_ID;
    NEXT_CHARACTER_ID += 1;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(value) {
    this._x = value;
  }
  set y(value) {
    this._y = value;
  }
  get life() {
    return this._life;
  }
  get id() {
    return this._id;
  }

  async moveUp() {
    await this._executeAction(this.x, this.y - 1);
  }

  async moveDown() {
    await this._executeAction(this.x, this.y + 1);
  }

  async moveLeft() {
    await this._executeAction(this.x - 1, this.y);
  }

  async moveRight() {
    await this._executeAction(this.x + 1, this.y);
  }

  hit(power) {
    this._life -= power;
  }

  isDead() {
    return this._life <= 0;
  }

  async _executeAction(x, y) {
    const target = this._board.getXY(x, y);
    if (target instanceof Character) {
      const attack = this._dice.roll();

      // gambiarra
      await Draw.invokeDiceAnimation(attack, this, target);

      target.hit(attack);
      if (target.isDead()) {
        this._board.updatePosition(this, x, y);
      }
    } else if (this.canMoveToTarget(target)) {
      this._board.updatePosition(this, x, y);
    }
  }

  canMoveToTarget(target) {
    if (this instanceof Monster) {
      return target instanceof EmptySpace;
    } else {
      return target instanceof EmptySpace || target instanceof Objective;
    }
  }
}
