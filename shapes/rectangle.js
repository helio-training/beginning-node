const utilities = require('../utilities');

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  get area() {
    return utilities.multiply(this.length, this.width);
  }
}

module.exports = Rectangle;
