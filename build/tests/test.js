"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _testConfig = require("./testConfig");

describe("Testing book endpoints", function () {
  describe("POST /api/v1/books", function () {
    it("Should create a book",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var book, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              book = {
                title: "Thinks Fall Apart",
                price: "1000",
                description: "Africa's best seller"
              };
              _context.next = 3;
              return _testConfig.chai.request(_testConfig.app).post("/api/v1/books").set("Accept", "application/json").send(book);

            case 3:
              res = _context.sent;

              /**tests */
              (0, _testConfig.expect)(res.status).to.equal(201);
              (0, _testConfig.expect)(res.body.data).to.include({
                id: 1,
                title: book.title,
                price: book.price,
                description: book.description
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it("Should not create a book with incomplete parameters",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var book, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              book = {
                title: "Thinks Fall Apart",
                price: "1000"
              };
              _context2.next = 3;
              return _testConfig.chai.request(_testConfig.app).post("/api/v1/books").set("Accept", "application/json").send(book);

            case 3:
              res = _context2.sent;

              /**tests */
              (0, _testConfig.expect)(res.status).to.equal(400);
              (0, _testConfig.expect)(res.body).to.include({
                status: "error"
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it("Should retrieve all books",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var _ref4, body;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _testConfig.chai.request(_testConfig.app).get("/api/v1/books").set("Accept", "application/json");

            case 2:
              _ref4 = _context3.sent;
              body = _ref4.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("success");
              (0, _testConfig.expect)(body.data.length).to.be.at.least(1);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it("Should retrieve a particular book",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var bookId, _ref6, body;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              bookId = 1;
              _context4.next = 3;
              return _testConfig.chai.request(_testConfig.app).get("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              _ref6 = _context4.sent;
              body = _ref6.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("success");
              (0, _testConfig.expect)(body.data).to.have.property("id");
              (0, _testConfig.expect)(body.data).to.have.property("title");
              (0, _testConfig.expect)(body.data).to.have.property("price");
              (0, _testConfig.expect)(body.data).to.have.property("description");

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    it("Should not retrieve a particular book with an inexistent id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var bookId, _ref8, body;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              bookId = 1000;
              _context5.next = 3;
              return _testConfig.chai.request(_testConfig.app).get("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              _ref8 = _context5.sent;
              body = _ref8.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Cannot find book with id ".concat(bookId));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    it("Should not retrieve a particular book with an invalid id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6() {
      var bookId, _ref10, body;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              bookId = "one";
              _context6.next = 3;
              return _testConfig.chai.request(_testConfig.app).get("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              _ref10 = _context6.sent;
              body = _ref10.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Input a numerical value");

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    it("Should update a particular book",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7() {
      var bookId, updateBook, res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              bookId = 1;
              updateBook = {
                id: bookId,
                title: "Arrow of God",
                price: "1100",
                description: "West African delight"
              };
              _context7.next = 4;
              return _testConfig.chai.request(_testConfig.app).put("/api/v1/books/".concat(bookId)).set("Accept", "application/json").send(updateBook);

            case 4:
              res = _context7.sent;

              /**tests */
              (0, _testConfig.expect)(res.status).to.deep.equal(200);
              (0, _testConfig.expect)(res.body.status).to.deep.equal("success");
              (0, _testConfig.expect)(res.body.data).to.have.property("title", "Arrow of God");
              (0, _testConfig.expect)(res.body.data).to.have.property("price", "1100");
              (0, _testConfig.expect)(res.body.data).to.have.property("description", "West African delight");

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    it("Should not update a particular book with an inexistent id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8() {
      var bookId, updateBook, _ref13, body;

      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              bookId = 1000;
              updateBook = {
                id: bookId,
                title: "Sherlock of Holmes",
                price: "2000",
                description: "Keit Knowles"
              };
              _context8.next = 4;
              return _testConfig.chai.request(_testConfig.app).put("/api/v1/books/".concat(bookId)).set("Accept", "application/json").send(updateBook);

            case 4:
              _ref13 = _context8.sent;
              body = _ref13.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Cannot find book with id ".concat(bookId));

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    it("Should not update a particular book with an invalid id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9() {
      var bookId, updateBook, _ref15, body;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              bookId = "one";
              updateBook = {
                id: bookId,
                title: "Sherlock of Holmes",
                price: "2000",
                description: "Keit Knowles"
              };
              _context9.next = 4;
              return _testConfig.chai.request(_testConfig.app).put("/api/v1/books/".concat(bookId)).set("Accept", "application/json").send(updateBook);

            case 4:
              _ref15 = _context9.sent;
              body = _ref15.body;

              /**tests */
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Use a numeric value");

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    it("Should delete a particular book",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee10() {
      var bookId, res;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              bookId = 1;
              _context10.next = 3;
              return _testConfig.chai.request(_testConfig.app)["delete"]("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              res = _context10.sent;

              /**tests */
              (0, _testConfig.expect)(res.status).to.deep.equal(200);
              (0, _testConfig.expect)(res.body.status).to.deep.equal("success");
              (0, _testConfig.expect)(res.body.message).to.deep.equal("Book successfully deleted");

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
    it("Should not return an error when there are no books",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee11() {
      var _ref18, status, body;

      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _testConfig.chai.request(_testConfig.app).get("/api/v1/books").set("Accept", "application/json");

            case 2:
              _ref18 = _context11.sent;
              status = _ref18.status;
              body = _ref18.body;

              /**tests */
              (0, _testConfig.expect)(status).to.deep.equal(404);
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("No books found");

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
    it("Should not delete a book with an inexistent id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee12() {
      var bookId, _ref20, status, body;

      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              bookId = 1000;
              _context12.next = 3;
              return _testConfig.chai.request(_testConfig.app)["delete"]("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              _ref20 = _context12.sent;
              status = _ref20.status;
              body = _ref20.body;

              /**tests */
              (0, _testConfig.expect)(status).to.equal(400);
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Book with id ".concat(bookId, " not found"));

            case 9:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    })));
    it("Should not delete a book with an invalid id",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee13() {
      var bookId, _ref22, status, body;

      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              bookId = "one";
              _context13.next = 3;
              return _testConfig.chai.request(_testConfig.app)["delete"]("/api/v1/books/".concat(bookId)).set("Accept", "application/json");

            case 3:
              _ref22 = _context13.sent;
              status = _ref22.status;
              body = _ref22.body;

              /**tests */
              (0, _testConfig.expect)(status).to.deep.equal(400);
              (0, _testConfig.expect)(body.status).to.deep.equal("error");
              (0, _testConfig.expect)(body.message).to.deep.equal("Input a numeric value");

            case 9:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
  });
});
//# sourceMappingURL=test.js.map