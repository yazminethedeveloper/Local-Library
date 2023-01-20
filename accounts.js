const { getTotalAccountsCount } = require("./home");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last < b.name.last ? -1 : 1));
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const borrowedBookArray = books.map((book) => book.borrows);
  borrowedBookArray.forEach((array) => array.forEach((borrowedBook) => {
    return borrowedBook.id === account.id ? total++ : total;
  })
                            );
  return total;
  }

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksPossessedByAccount = booksCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
