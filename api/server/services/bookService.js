import database from "../src/models";

class BookService {
  /**
   * @returns {Promise<JSON>}
   */
  static async getAllBooks() {
    try {
      return await database.Book.findAll();
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {JSON} book
   * @returns {Promise<JSON>}
   */
  static async addBook(book) {
    try {
      return await database.Book.create(book);
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
      const bookToUpdate = await database.Book.findOne({
        where: { id: Number(id) }
      });
      if (bookToUpdate) {
        await database.Book.update(book, {
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
      const book = await database.Book.findOne({
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
      const book = await database.Book.findOne({
        where: { id: Number(id) }
      });
      if (book) {
        const deletedBook = await database.Book.destroy({
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
