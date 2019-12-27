"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bookService = _interopRequireDefault(require("../services/bookService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var BookController =
/*#__PURE__*/
function () {
  function BookController() {
    (0, _classCallCheck2["default"])(this, BookController);
  }

  (0, _createClass2["default"])(BookController, null, [{
    key: "getAllBooks",

    /**
     *
     * @param {Request} req
     * @param {Response} res
     */
    value: function () {
      var _getAllBooks = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var books;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _bookService["default"].getAllBooks();

              case 3:
                books = _context.sent;

                if (books.length > 0) {
                  util.setSuccess(200, "Books retrieved", books);
                } else {
                  util.setError(404, "No books found");
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllBooks(_x, _x2) {
        return _getAllBooks.apply(this, arguments);
      }

      return getAllBooks;
    }()
    /**
     *
     * @param {Request} req
     * @param {Response} res
     */

  }, {
    key: "addBook",
    value: function () {
      var _addBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, title, price, description, book, createdBook;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, title = _req$body.title, price = _req$body.price, description = _req$body.description;

                if (!title || !price || !description) {
                  util.setError(400, "Missing details");
                }

                book = {
                  title: title,
                  price: price,
                  description: description
                };
                _context2.prev = 3;
                _context2.next = 6;
                return _bookService["default"].addBook(book);

              case 6:
                createdBook = _context2.sent;
                util.setSuccess(201, "Book successfully added", createdBook);
                return _context2.abrupt("return", util.send(res));

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                util.setError(400, _context2.t0);
                return _context2.abrupt("return", util.send(res));

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 11]]);
      }));

      function addBook(_x3, _x4) {
        return _addBook.apply(this, arguments);
      }

      return addBook;
    }()
  }, {
    key: "updateBook",
    value: function () {
      var _updateBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var details, id, bookUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                details = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, "Use a numeric value");
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _bookService["default"].updateBook(id, details);

              case 8:
                bookUpdate = _context3.sent;

                if (!bookUpdate) {
                  util.setError(404, "Cannot find book with id ".concat(id));
                } else {
                  util.setSuccess(200, "Book successfully updated", bookUpdate);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(400, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updateBook(_x5, _x6) {
        return _updateBook.apply(this, arguments);
      }

      return updateBook;
    }()
  }, {
    key: "getBook",
    value: function () {
      var _getBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, book;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, "Input a numerical value");
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _bookService["default"].getBook(id);

              case 7:
                book = _context4.sent;

                if (!book) {
                  util.setError(404, "Cannot find book with id ".concat(id));
                } else {
                  util.setSuccess(200, "Success", book);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(400, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getBook(_x7, _x8) {
        return _getBook.apply(this, arguments);
      }

      return getBook;
    }()
  }, {
    key: "deleteBook",
    value: function () {
      var _deleteBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, _deleteBook2;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, "Input a numeric value");
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _bookService["default"].deleteBook(id);

              case 7:
                _deleteBook2 = _context5.sent;

                if (!_deleteBook2) {
                  util.setError(400, "Book with id ".concat(id, " not found"));
                } else {
                  util.setSuccess(200, "Book successfully deleted");
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteBook(_x9, _x10) {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }]);
  return BookController;
}();

var _default = BookController;
exports["default"] = _default;
//# sourceMappingURL=bookController.js.map