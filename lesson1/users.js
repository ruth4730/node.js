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
const fs = require('fs')
const { resolve } = require('path')
const path = './users.json'
function initUsers() {
    try {
        const data = JSON.stringify(arr, null, 2)
        fs.writeFileSync(path, data, 'utf8')
        console.log("users data success!")
    } catch (err) {
        console.log("users data error!")
    }
}
function readUsers() {
    return new Promise((resolve,reject)=>{
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                return reject(err)
            }
            const users = JSON.parse(data)
            resolve(users)
        })
    })
}

function print(callback) {
    readUsers().then((users)=>{
        for (const u of users)
            console.log(JSON.stringify(u, null, 2))
    })
    .catch((err)=>console.log(err))
}
function borrow(id) {
    return new Promise((resolve,reject)=>{
        readUsers().then((users)=>{
            const user = users.find(u => u.id == id)
            if (!user) {
                return reject(new Error(`user with code ${id} not found! `))
            }
            resolve(user)
        })
        .catch((err)=>reject(err))
    })
}
module.exports={User,borrowUser:borrow,printUser:print,initUsers,readUsers}
