class Monster extends Character {
  async act(hero) {
    let goX = this.x - hero.x;
    let goY = this.y - hero.y;
    if (Math.abs(goX) > Math.abs(goY)) {
      if (goX > 0) {
        const target = this._board.getXY(this.x - 1, this.y);
        if (this.canAimAtTarget(target)) {
          await this.moveLeft();
        } else {
          if (goY > 0) {
            await this.moveUp();
          } else if (goY < 0) {
            await this.moveDown();
          } else {
            await this.moveLeft();
          }
        }
      } else {
        const target = this._board.getXY(this.x + 1, this.y);
        if (this.canAimAtTarget(target)) {
          await this.moveRight();
        } else {
          if (goY > 0) {
            await this.moveUp();
          } else if (goY < 0) {
            await this.moveDown();
          } else {
            await this.moveRight();
          }
        }
      }
    } else {
      if (goY > 0) {
        const target = this._board.getXY(this.x, this.y - 1);
        if (this.canAimAtTarget(target)) {
          await this.moveUp();
        } else {
          if (goX > 0) {
            await this.moveLeft();
          } else if (goX < 0) {
            await this.moveRight();
          } else {
            await this.moveUp();
          }
        }
      } else {
        const target = this._board.getXY(this.x, this.y + 1);
        if (this.canAimAtTarget(target)) {
          await this.moveDown();
        } else {
          if (goX > 0) {
            await this.moveLeft();
          } else if (goX < 0) {
            await this.moveRight();
          } else {
            await this.moveDown();
          }
        }
      }
    }
  }

  canAimAtTarget(target) {
    return target instanceof EmptySpace || target instanceof Character;
  }
}
