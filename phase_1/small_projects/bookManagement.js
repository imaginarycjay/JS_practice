// Book constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Library constructor function
function Library() {
  this.books = []; // Array to store book objects

  // Add book to the library
  this.addBook = function (book) {
    this.books.push(book);
    console.log(`Added: ${book.title}`);
  };

  // Find book by title
  this.findBook = function (title) {
    const book = this.books.find(
      (b) => b.title.toLowerCase() === title.toLowerCase()
    );
    return book ? book : `Book not found: ${title}`;
  };

  // List all books
  this.listBooks = function () {
    if (this.books.length === 0) {
      console.log("No books in the library.");
    } else {
      console.log("\nLibrary Books:");
      this.books.forEach((book, index) => {
        console.log(
          `${index + 1}. ${book.title} by ${book.author} (${book.year})`
        );
      });
    }
  };
}

// ✅ Example Usage:
const myLibrary = new Library();

myLibrary.addBook(new Book("1984", "George Orwell", 1949));
myLibrary.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
myLibrary.addBook(new Book("Art of War", "Sun Tzu", -500));
myLibrary.addBook(new Book("Tae", "Dogshit", 1969));

console.log("\n🔍 Finding Books:");
console.log(myLibrary.findBook("Tae")); // Should return the book object
console.log("\n📚 Listing All Books:");
myLibrary.listBooks();

//   c. chatgpt
