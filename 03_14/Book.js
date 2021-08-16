class Book {
  constructor(
    name,
    numberOfPages,
    length,
    height,
    width,
    author,
    publisher,
    printDate,
    dateAcquired
  ) {
    this.name = name;
    this.numberOfPages = numberOfPages;
    (this.size = {
      length: length,
      width: width,
      height: height,
    }),
      (this.author = author),
      (this.publisher = publisher),
      (this.printDate = printDate),
      (this.dateAcquired = dateAcquired);
  }

  bookAge() {
    let now = new Date();
    let printDate = new Date(this.printDate);
    let elapsed = now - printDate;
    let age = Math.floor(elapsed / (1000 * 3600 * 24));
    return age;
  }

  inPosession() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let posession = Math.floor(elapsed / (1000 * 3600 * 24));

    return posession;
  }

  volume() {
    let volume = Math.floor(
      this.size.length * this.size.width * this.size.height
    );

    return volume;
  }
}

export default Book;
