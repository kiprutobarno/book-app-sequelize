class Util {
  constructor() {
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
  setSuccess(statusCode, message, data) {
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
  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  /**
   *
   * @param {Response} res
   * @returns {JSON}
   */
  send(res) {
    if (this.type === "success") {
      return res
        .status(this.statusCode)
        .json({ status: this.type, message: this.message, data: this.data });
    }
    return res
      .status(this.statusCode)
      .json({ status: this.type, message: this.message });
  }
}

export default Util;
