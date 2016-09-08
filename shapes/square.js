const Rectangle = require('./rectangle');

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

module.exports = Square;
