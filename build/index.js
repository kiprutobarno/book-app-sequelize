"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _bookRoutes = _interopRequireDefault(require("./server/routes/bookRoutes"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use("/api/v1/books", _bookRoutes["default"]);
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map