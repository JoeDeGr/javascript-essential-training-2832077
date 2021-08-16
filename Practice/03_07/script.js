/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const guitar = {
  name: "oddly",
  guitarManufacturer: "Ibanez",
  stringsNum: 4,
  neckLength: 32,
  pickups: 2,
  weight: 12,
  hasStrap: true,
  toggleStrap: function (value) {
    this.hasStrap = value;
  },
};

console.log(guitar);
console.log(guitar.hasStrap);

guitar.toggleStrap(false);
console.log(guitar);

const sunglasses = {
  name: "skullerz",
  age: 1,
  hasScratches: "true",
  toggleScratches: function (value) {
    this.hasScratches = true;
  },
  lost: false,
  lose: function () {
    console.log("Shit! I lost my", sunglasses.name);
    this.lost = true;
  },
  find: function () {
    console.log(
      "Oooooh yea!!! Now Were Talking! Thats where I left my",
      sunglasses.name
    );
    this.lost = false;
  },
};

console.log(sunglasses);
