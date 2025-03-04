const {borrowBook,printBook}=require('./books')
const {borrowUser,printUser}=require('./users')
const book=borrowBook(0);
const user=borrowUser('123456789');
if(book.type!==user.type && book.borrow==='no' && user.borrow==='no'){
    user.borrow='yes'
    book.borrow='yes'
    console.log('the book was borrowed with success');   
}
else{
    console.log('you cant borrow book');   
}