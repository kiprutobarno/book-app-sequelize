import db from "../src/models";

class BookService {
  /**
   * @returns {Promise<JSON>}
   */
  static async getAllBooks() {
    try {
      return await db.Book.findAll();
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {JSON} book
   * @returns {JSON}
   */
  static async addBook(book) {
    try {
      return await db.Book.create(book);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {Number} id
   * @param {JSON} book
   * @returns {Promise<JSON>}
   */
  static async updateBook(id, book) {
    try {
      const bookToUpdate = await db.Book.findOne({
        where: { id: Number(id) }
      });
      if (bookToUpdate) {
        await db.Book.update(book, {
          where: { id: Number(id) }
        });
        return book;
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * @param {Number} id
   * @returns {Promise<JSON>}
   */
  static async getBook(id) {
    try {
      const book = await db.Book.findOne({
        where: { id: Number(id) }
      });
      return book;
    } catch (error) {}
  }

  /**
   * @param {Number} id
   * @returns {null}
   */
  static async deleteBook(id) {
    try {
      const book = await db.Book.findOne({
        where: { id: Number(id) }
      });
      if (book) {
        const deletedBook = await db.Book.destroy({
          where: { id: Number(id) }
        });
        return deletedBook;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
