import Book from '../models/books.model.js';
export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        next({ message: err.message });
    }
}
export const getBookById = (req, res, next) => {
    try {
        const { id } = req.params;
        const book = Book.find((b) => b.id == id);
        res.json(book);
    } catch (err) {
        next({ message: err.message });
    }
}
export const addBook = async (req, res, next) => {
    try {
        const { title, price } = req.body;
        const book = new Book({ title: title, price: price })
        await book.save();
        res.status(201).json(book);
    }
    catch (err) {
        next({ message: err.message });
    }
}
export const updateBook = async (req, res, next) => {
    try {
        const bId = req.params.id;
        const { _id, title, price } = req.body;
        if (bId !== _id) {
            return next({ status: 409, message: 'Id mismatch' });
        }
        const book = await Book.findByIdAndUpdate(bId,
            {
                $set: { title, price }
            }, { new: true })
        res.status(200).json(book);
    } catch (err) {
        next({ message: err.message });
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.status(204).end();
    } catch (err) {
        next({ message: err.message });
    }
}