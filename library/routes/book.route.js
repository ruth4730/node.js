import express from 'express';
const router = express.Router();
router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)
export default router;