# Multiplication Exercise

Introduction to folder abstraction and module.exports = {}

## Steps

* Export a multiplication function in the multiplication.js file
* Create an index.js file to expose the multiplication function as 
```js
const multiply = require('???');

module.exports = {
  multiply: multiply
}
```
* Refactor the rectangle's area function (rectangle.js) to use the multiplication function through the utilities folder

```js
area() {
  multiply(this.length, this.width);
}
```