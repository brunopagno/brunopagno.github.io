class Dice {
  constructor(max, bonus = 0) {
    this.max = max;
    this.bonus = bonus;
  }

  roll(modifier = 0) {
    return Math.ceil(Math.random() * this.max) + modifier + this.bonus;
  }
}
