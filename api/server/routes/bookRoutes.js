import { Router } from "express";
import Controller from "../controllers/bookController";

const router = Router();

router.get("/", Controller.getAllBooks);
router.post("/", Controller.addBook);
router.get("/:id", Controller.getBook);
router.put("/:id", Controller.updateBook);
router.delete("/:id", Controller.deleteBook);

export default router;
