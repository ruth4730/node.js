const { borrowBook, initBooks } = require('./books');
const { borrowUser, initUsers } = require('./users');
const { addLoan } = require('./loans');

// עטוף את הקוד הראשי בפונקציה אסינכרונית
async function main() {
    initBooks();
    initUsers();

    const bookId = process.argv[2];
    const userId = process.argv[3];

    try {
        const book = borrowBook(bookId);
        const user = await borrowUser(userId);
        if (book && user && book.borrowed === 'no' && user.borrowed === 'no') {
            user.borrowed = 'yes';
            book.borrowed = 'yes';
            addLoan(userId, bookId);
            console.log('The book was borrowed successfully!');
        } else {
            console.log('You cannot borrow this book.');
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
