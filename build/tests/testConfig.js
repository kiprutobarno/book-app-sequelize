"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chai", {
  enumerable: true,
  get: function get() {
    return _chai["default"];
  }
});
Object.defineProperty(exports, "expect", {
  enumerable: true,
  get: function get() {
    return _chai.expect;
  }
});
Object.defineProperty(exports, "app", {
  enumerable: true,
  get: function get() {
    return _index["default"];
  }
});

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);
//# sourceMappingURL=testConfig.js.map