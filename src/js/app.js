export default class Validator {
  constructor(name) {
    this.name = name;
    this.validateUsername();
  }

  validateUsername() {
   return /(^[a-z]+)(\d{0,3})([a-z]*)([-_]?)([a-z]+$)/i.test(this.name);

  }
}

const player = new Validator('Alex222_mix');

console.log(player.validateUsername());