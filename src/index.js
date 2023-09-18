var _a, _b;
var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is impossible");
        }
        return a / b;
    },
};
var calculate = function (calculator, operation, num1, num2) {
    if (!calculator[operation]) {
        throw new Error("Unknown operation");
    }
    return calculator[operation](num1, num2);
};
var books = [
    { id: 1, title: 'Book 1', authorId: 1, publicationYear: 2020 },
    { id: 2, title: 'Book 2', authorId: 2, publicationYear: 2018 },
    { id: 3, title: 'Book 3', authorId: 1, publicationYear: 2022 },
];
var authors = [
    { id: 1, name: 'book author 1', birthYear: 1980 },
    { id: 2, name: 'book author 2', birthYear: 1990 },
];
var bookService = {
    getBookById: function (id) {
        return books.find(function (book) { return book.id === id; });
    },
    getBooksByTitle: function (title) {
        return books.filter(function (book) { return book.title === title; });
    },
    getBooksByPublicationYear: function (year) {
        return books.filter(function (book) { return book.publicationYear === year; });
    },
    getBooksByAuthor: function (authorId) {
        return books.filter(function (book) { return book.authorId === authorId; });
    },
    getBooksPublishedAfterYear: function (year) {
        return books.filter(function (book) { return book.publicationYear > year; });
    },
    getBooksPublishedBeforeYear: function (year) {
        return books.filter(function (book) { return book.publicationYear < year; });
    },
    getBooksByAuthorAndTitle: function (authorId, title) {
        return books.filter(function (book) { return book.authorId === authorId && book.title === title; });
    },
    getAllAuthors: function () {
        return authors;
    },
};
var bookId = 1;
var book = bookService.getBookById(bookId);
var author = bookService.getAllAuthors().find(function (author) { var _a; return author.id === ((_a = book === null || book === void 0 ? void 0 : book.authorId) !== null && _a !== void 0 ? _a : -1); });
console.log("Book title: ".concat((_a = book === null || book === void 0 ? void 0 : book.title) !== null && _a !== void 0 ? _a : 'Not found'));
console.log("Author: ".concat((_b = author === null || author === void 0 ? void 0 : author.name) !== null && _b !== void 0 ? _b : 'Not found'));
var authorId = 1;
var booksByAuthor = bookService.getBooksByAuthor(authorId);
console.log("Book by author with this ID ".concat(authorId, ":"));
booksByAuthor.forEach(function (book) {
    console.log("- ".concat(book.title));
});
var bookTitle = 'Book 1';
var booksByTitle = bookService.getBooksByTitle(bookTitle);
console.log("Books with this title \"".concat(bookTitle, "\":"));
booksByTitle.forEach(function (book) {
    console.log("- ".concat(book.title));
});
var publicationYear = 2020;
var booksByPublicationYear = bookService.getBooksByPublicationYear(publicationYear);
console.log("Books published in ".concat(publicationYear, " :"));
booksByPublicationYear.forEach(function (book) {
    console.log("- ".concat(book.title));
});
