// ✅ Factory Function for Book
function createBook(title, author) {
  return {
    title,
    author,
    status: "Available" // Default status
  };
}

// ✅ Library Object to Manage Books
const Library = {
  books: [],

  addBook(book) {
    this.books.push(book);
    console.log(`Added: ${book.title}`);
  },

  displayBooks() {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Status: ${book.status}`);
    });
  },

  borrowBook(title) {
    const book = this.books.find(b => b.title === title);
    if (book) {
      if (book.status === "Available") {
        book.status = "Borrowed";
        console.log(`Borrowed: ${book.title}`);
      } else {
        console.log(`Sorry, ${book.title} is already borrowed.`);
      }
    } else {
      console.log(`Book not found: ${title}`);
    }
  }
};

// ✅ Example Usage
Library.addBook(createBook("Programming 101", "Cjay"));
Library.addBook(createBook("How to Kill Efficiently", "Mary"));
Library.addBook(createBook("How to Get Passing Grade", "Pajes"));

Library.displayBooks();
Library.borrowBook("Programming 101");
Library.borrowBook("Programming 101");
Library.displayBooks();
