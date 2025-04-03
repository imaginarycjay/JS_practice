const input = require("prompt-sync")();

function createBook() {
  return {
    title: String(input("Enter title: ")),
    author: String(input("Enter author: ")),
    status: "Available", // Default status
  };
}

const Library = {
  books: [],

  addBook(book) {
    this.books.push(book);
    console.log(`Added: ${book.title}`);
  },

  displayBooks() {
    if (this.books.length === 0) {
      console.log(`There are no books here yet.`);
    } else {
      this.books.forEach((book, index) => {
        console.log(
          `${index + 1}. Title: ${book.title}, Author: ${
            book.author
          }, Status: ${book.status}`
        );
      });
    }
  },

  borrowBook() {
    const title = input("Enter title: ");
    const book = this.books.find((b) => b.title === title);
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
  },

  returnBook() {
    const title = input("Book to return: ");
    const book = this.books.find((b) => b.title === title);
    if (book) {
      if (book.status === "Borrowed") {
        book.status = "Available";
        console.log(`You return ${book.title}`);
      } else {
        console.log(`Book: ${book.title} is already available.`);
      }
    } else {
      console.log(`Book not found: ${title}`);
    }
  },
};

console.log(
  `Welcome to Library System \n[1] = addBook \n[2] = borrow book \n[3] = return book \n[4] = display book \n[5] = quit`
);

while (true) {
  console.log();
  const UserChoice = Number(input("Menu: "));
  if (isNaN(UserChoice)) {
    console.log("invalid bai");
    return;
  }
  if (UserChoice === 5) {
    console.log("You logged out");
    return;
  }

  switch (UserChoice) {
    case 1:
      Library.addBook(createBook());
      break;
    case 2:
      Library.borrowBook();
      break;
    case 3:
      Library.returnBook();
      break;
    case 4:
      Library.displayBooks();
      break;
  }
}
