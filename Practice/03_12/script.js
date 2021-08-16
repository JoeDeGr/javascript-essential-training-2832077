/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Shirt {
  constructor(name, color, size, threadbare = false, wearing) {
    //properties
    this.name = name;
    this.color = color;
    this.size = size;
    this.threadbare = threadbare;
    this.wearing = wearing;
  }
  //methods
  toggleThreadbare() {
    this.threadbare = !this.threadbare;
  }
  wear() {
    this.wearing = true;
  }
  takeOff() {
    this.wearing = false;
  }
}

const blueStriped = new Shirt("striped", "blue", "large", false, false);

console.log(blueStriped);

blueStriped.wear();

console.log(blueStriped);

blueStriped.toggleThreadbare();

blueStriped.takeOff();

console.log(blueStriped);

export default Shirt;

//object constructor function
// function Pants(name, color, size, threadbare = false) {
//   this.name = name;
//   this.color = color;
//   this.size = size;
//   this.threadbare = threadbare;
//   this.toggleThreadbare = function () {
//     this.threadbare = !this.threadbare;
//   };
// }

// const denim = new Pants("jeans", "blue", 40, false);

// console.log(denim);
// denim.toggleThreadbare();
// console.log(denim);
// export default Pants
