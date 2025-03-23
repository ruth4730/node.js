const { log } = require("console");
const fs = require('fs')
const { resolve } = require('path')
const path = './books.json'
class Book {
    id;
    name;
    type;
    borrowed;
    static count = 0;
    constructor(name, type, borrowed) {
        this.id = Book.count++;
        this.name = name;
        this.type = type;
        this.borrowed = borrowed;
    }
    toString() {
        return `id: ${this.id}, name:${this.name}, type: ${this.type}, borrowed:${this.borrowed}`
    }
}
let arr = [
    new Book('Nans Long Journey', 'drama', 'no'),
    new Book('What is right is right', 'emotion', 'yes'),
    new Book('Blue Blood', 'tension', 'yes')
]
function print() {
    const books = readBooks();
    for(const b in books)
        console.log(JSON.stringify(b,null,2));       
}
function borrow(c) {
    const books = readBooks()
    for (const b of books) {
        if (b.id == c)
            return b
    }
    throw new Error(`book with code ${c} not found! `)
}
function initBooks(){
    try{
        const data = JSON.stringify(arr,null,2)
        fs.writeFileSync(path,data,'utf8')
        console.log("books data success!")
    } catch (err){
        console.log("books data error!")
    }
}
function readBooks(){
    try{
        const data = fs.readFileSync(path,'utf8')
        return JSON.parse(data)
    } catch(err){
        console.log("error reading books file:",err)
        return []
    }
}
module.exports = { Book, borrowBook: borrow, printBook: print, initBooks,readBooks}

