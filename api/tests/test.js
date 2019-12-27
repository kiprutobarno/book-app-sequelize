import { chai, app, expect } from "./testConfig";

describe("Testing book endpoints", () => {
  describe("POST /api/v1/books", () => {
    it("Should create a book", async () => {
      const book = {
        title: "Thinks Fall Apart",
        price: "1000",
        description: "Africa's best seller"
      };
      let res = await chai
        .request(app)
        .post("/api/v1/books")
        .set("Accept", "application/json")
        .send(book);
      /**tests */
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        title: book.title,
        price: book.price,
        description: book.description
      });
    });

    it("Should not create a book with incomplete parameters", async () => {
      const book = {
        title: "Thinks Fall Apart",
        price: "1000"
      };
      let res = await chai
        .request(app)
        .post("/api/v1/books")
        .set("Accept", "application/json")
        .send(book);

      /**tests */
      expect(res.status).to.equal(400);
      expect(res.body).to.include({
        status: "error"
      });
    });

    it("Should retrieve all books", async () => {
      const { body } = await chai
        .request(app)
        .get("/api/v1/books")
        .set("Accept", "application/json");

      /**tests */
      expect(body.status).to.deep.equal("success");
      expect(body.data.length).to.be.at.least(1);
    });

    it("Should retrieve a particular book", async () => {
      const bookId = 1;
      const { body } = await chai
        .request(app)
        .get(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(body.status).to.deep.equal("success");
      expect(body.data).to.have.property("id");
      expect(body.data).to.have.property("title");
      expect(body.data).to.have.property("price");
      expect(body.data).to.have.property("description");
    });

    it("Should not retrieve a particular book with an inexistent id", async () => {
      const bookId = 1000;
      const { body } = await chai
        .request(app)
        .get(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal(`Cannot find book with id ${bookId}`);
    });

    it("Should not retrieve a particular book with an invalid id", async () => {
      const bookId = "one";
      const { body } = await chai
        .request(app)
        .get(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal("Input a numerical value");
    });

    it("Should update a particular book", async () => {
      const bookId = 1;
      const updateBook = {
        id: bookId,
        title: "Arrow of God",
        price: "1100",
        description: "West African delight"
      };
      const res = await chai
        .request(app)
        .put(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json")
        .send(updateBook);

      /**tests */
      expect(res.status).to.deep.equal(200);
      expect(res.body.status).to.deep.equal("success");
      expect(res.body.data).to.have.property("title", "Arrow of God");
      expect(res.body.data).to.have.property("price", "1100");
      expect(res.body.data).to.have.property(
        "description",
        "West African delight"
      );
    });

    it("Should not update a particular book with an inexistent id", async () => {
      const bookId = 1000;
      const updateBook = {
        id: bookId,
        title: "Sherlock of Holmes",
        price: "2000",
        description: "Keit Knowles"
      };
      const { body } = await chai
        .request(app)
        .put(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json")
        .send(updateBook);

      /**tests */
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal(`Cannot find book with id ${bookId}`);
    });

    it("Should not update a particular book with an invalid id", async () => {
      const bookId = "one";
      const updateBook = {
        id: bookId,
        title: "Sherlock of Holmes",
        price: "2000",
        description: "Keit Knowles"
      };
      const { body } = await chai
        .request(app)
        .put(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json")
        .send(updateBook);

      /**tests */
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal("Use a numeric value");
    });

    it("Should delete a particular book", async () => {
      const bookId = 1;
      const res = await chai
        .request(app)
        .delete(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(res.status).to.deep.equal(200);
      expect(res.body.status).to.deep.equal("success");
      expect(res.body.message).to.deep.equal("Book successfully deleted");
    });

    it("Should not return an error when there are no books", async () => {
      const { status, body } = await chai
        .request(app)
        .get(`/api/v1/books`)
        .set("Accept", "application/json");

      /**tests */
      expect(status).to.deep.equal(404);
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal("No books found");
    });

    it("Should not delete a book with an inexistent id", async () => {
      const bookId = 1000;
      const { status, body } = await chai
        .request(app)
        .delete(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(status).to.equal(400);
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal(`Book with id ${bookId} not found`);
    });

    it("Should not delete a book with an invalid id", async () => {
      const bookId = "one";
      const { status, body } = await chai
        .request(app)
        .delete(`/api/v1/books/${bookId}`)
        .set("Accept", "application/json");

      /**tests */
      expect(status).to.deep.equal(400);
      expect(body.status).to.deep.equal("error");
      expect(body.message).to.deep.equal("Input a numeric value");
    });
  });
});
