class User {
    id;
    name;
    type;
    borrowed;

    constructor(id,name, type, borrowed) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.borrowed = borrowed;
    }
    toString() {
        return `id: ${this.id}, name:${this.name}, type: ${this.type}, borrowed:${this.borrowed}`
    }
}
let arr=[
    new User('123456789','Eli Cohen','aaa','no'),
    new User('987654322','Ruth Reis','drama','yes'),
    new User('321654987','Moshe Levi','drama','yes')
]
function print(...arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}
function borrow(id) {
    try {
        const result = arr.filter(x => x.id === id);
        if (result.length === 0) {
            throw new Error("user not found");
        }
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={User,borrowUser:borrow,printUser:print}
