import { model, Schema } from "mongoose";
const userSchema = new Schema({
    userName: String,
    mail: String,
    password: String
})
export default model('users', userSchema);