/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const newBook = new Book(
  "The Frizzzle Fry",
  237,
  12,
  12,
  1.5,
  "Johnny Ugotts",
  "Random",
  "December 5, 2018 15:00:00 PST",
  "December 5, 2020 15:00:00 PST"
);

console.log("Book name:", newBook.name);
console.log("Number of pages:", newBook.numberOfPages);
console.log("This books age:", newBook.bookAge(), "days old.");
console.log(`I have had this book for ${newBook.inPosession()} days.`);
console.log("The volume of this book is:", newBook.volume(), "cubic inches.");

const SecondNewBook = new Book(
  "The Frizzzle Fry",
  237,
  12,
  12,
  1.5,
  "Johnny Ugotts",
  "Random",
  "December 5, 2018 15:00:00 PST",
  "December 5, 2020 15:00:00 PST"
);

console.log("Book name:", SecondNewBook.name);
console.log("Number of pages:", SecondNewBook.numberOfPages);
console.log("This books age:", SecondNewBook.bookAge(), "days old.");
console.log(`I have had this book for ${SecondNewBook.inPosession()} days.`);
console.log(
  "The volume of this book is:",
  SecondNewBook.volume(),
  "cubic inches."
);

const ThirdNewBook = new Book(
  "The Frizzzle Fry",
  237,
  12,
  12,
  1.5,
  "Johnny Ugotts",
  "Random",
  "December 5, 2018 15:00:00 PST",
  "December 5, 2020 15:00:00 PST"
);

console.log("Book name:", ThirdNewBook.name);
console.log("Number of pages:", ThirdNewBook.numberOfPages);
console.log("This books age:", ThirdNewBook.bookAge(), "days old.");
console.log(`I have had this book for ${ThirdNewBook.inPosession()} days.`);
console.log(
  "The volume of this book is:",
  ThirdNewBook.volume(),
  "cubic inches."
);
