import { model, Schema } from "mongoose";
const bookSchema = new Schema({
    name: String,
    price: Number,
    categories: [],
    author: {
        name: String,
        phone: String,
        mail: String
    }
})
export default model('books', bookSchema);