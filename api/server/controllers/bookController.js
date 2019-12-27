import BookService from "../services/bookService";
import Util from "../utils/Utils";

const util = new Util();

class BookController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  static async getAllBooks(req, res) {
    try {
      const books = await BookService.getAllBooks();
      if (books.length > 0) {
        util.setSuccess(200, "Books retrieved", books);
      } else {
        util.setError(404, "No books found");
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */

  static async addBook(req, res) {
    const { title, price, description } = req.body;
    if (!title || !price || !description) {
      util.setError(400, "Missing details");
    }
    const book = { title, price, description };
    try {
      const createdBook = await BookService.addBook(book);
      util.setSuccess(200, "Book successfully added", createdBook);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async updateBook(req, res) {
    const details = req.body;
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Use a numeric value");
      return send(res);
    }

    try {
      const bookUpdate = await BookService.updateBook(id, details);
      if (!bookUpdate) {
        util.setError(404, `Cannot find book with id ${id}`);
      } else {
        util.setSuccess(200, "Book successfully updated", bookUpdate);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getBook(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Input a numerical value");
      return util.send(res);
    }
    try {
      const book = await BookService.getBook(id);
      if (!book) {
        util.setError(404, `Cannot find book with id ${id}`);
      } else {
        util.setSuccess(200, "Success", book);
      }
      return send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deleteBook(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Input a numeric value");
      util.send(res);
    }
    try {
      const deleteBook = await BookService.deleteBook(id);
      if (!deleteBook) {
        util.setError(400, `Book with id ${id} not found`);
      } else {
        util.setSuccess(200, "Book successfully deleted");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      util.send(res);
    }
  }
}

export default BookController;
