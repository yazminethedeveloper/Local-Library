function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id)
  return found;
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id)
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const resultOne = books.filter((book) => book.borrows[0].returned === false);
  const resultTwo = books.filter((book) => book.borrows[0].returned === true);
  return [resultOne, resultTwo];
}

function getBorrowersForBook(book, accounts) {
const borrowers = [];
  const bookBorrows = book.borrows;
  bookBorrows.forEach((book) => {
    const bookObject = accounts.find((accounts) => accounts.id === book.id);
    bookObject["returned"] = book.returned;
    borrowers.push(bookObject);
  });
  borrowers.length = 10;
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
