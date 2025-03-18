
const {borrowBook,printBook,initBooks}=require('./books')
const {borrowUser,printUser, initUsers}=require('./users')
//initUsers()
initBooks()
/*const book=borrowBook(process.argv[2]);
const user=borrowUser(process.argv[3]);
if(book!=null && user!=null && book.type!==user.type && book.borrow==='no' && user.borrow==='no'){
    user.borrow='yes'
    book.borrow='yes'
    console.log('the book was borrowed with success');   
}
else{
    console.log('you cant borrow book');   
}*/
