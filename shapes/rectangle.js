const utilities = require('../utilities');

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;

    if(this.length <= 0) {
      throw Error('Length is negative');
    }

    if(this.width <= 0) {
      throw Error('Width is negative');
    }
  }

  get area() {
    return utilities.multiply(this.length, this.width);
  }
}

module.exports = Rectangle;
