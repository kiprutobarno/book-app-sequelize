"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Util =
/*#__PURE__*/
function () {
  function Util() {
    (0, _classCallCheck2["default"])(this, Util);
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }
  /**
   *
   * @param {Number} statusCode
   * @param {String} message
   * @param {JSON} data
   */


  (0, _createClass2["default"])(Util, [{
    key: "setSuccess",
    value: function setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = "success";
    }
    /**
     *
     * @param {Number} statusCode
     * @param {String} message
     */

  }, {
    key: "setError",
    value: function setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = "error";
    }
    /**
     *
     * @param {Response} res
     * @returns {JSON}
     */

  }, {
    key: "send",
    value: function send(res) {
      if (this.type === "success") {
        return res.status(this.statusCode).json({
          status: this.type,
          message: this.message,
          data: this.data
        });
      }

      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message
      });
    }
  }]);
  return Util;
}();

var _default = Util;
exports["default"] = _default;
//# sourceMappingURL=Utils.js.map