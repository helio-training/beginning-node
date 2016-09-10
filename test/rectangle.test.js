const code = require('code');
const expect = code.expect;

const Rectangle = require('../shapes/rectangle');

describe('Rectangle', () => {

  it('calculates the area', () => {

    // Arrange (setup)
    const rectangle = new Rectangle(4, 5);

    // Act
    const result = rectangle.area;

    // Assert
    expect(result).to.equal(20);
  });

  it('restrict the length to a positive number', () => {

    expect(() => {
      new Rectangle(-1, 5);
    }).to.throw(/Length is negative/);

  });


  it('restrict the width to a positive number', () => {

    expect(() => {
      new Rectangle(5, -1);
    }).to.throw(/Width is negative/);

  });

});