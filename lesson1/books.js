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
function print(...arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}
function borrow(code) {
    try {
        const result = arr.filter(x => x.id === code);
        if (result.length === 0) {
            throw new Error("Book not found");
        }
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={Book,borrowBook:borrow,printBook:print}

