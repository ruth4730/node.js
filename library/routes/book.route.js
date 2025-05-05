import bookArr from '../models/books.js';
import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json(bookArr);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const book = bookArr.find((b) => b.id === parseInt(id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})
router.post('/', (req,res) => {
    const { book } = req.body;
    bookArr.push(book);
    res.status(201).json({
        message: 'Book added successfully',
        book: book
    });
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { book } = req.body;
    const index = bookArr.findIndex((b) => b.id === parseInt(id));
    if (index !== -1) {
        bookArr[index] = book;
        res.status(200).json({
            message: 'Book updated successfully',
            book: book
        });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = bookArr.findIndex((b) => b.id === parseInt(id));
    if (index !== -1) {
        bookArr.splice(index, 1);
        res.status(200).json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})
