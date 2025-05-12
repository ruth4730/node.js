import mongoose from "mongoose";
export const connectDB = async()=>{
    const DB_URI = process.env.DB_URI|| 'mongodb://127.0.0.1/LibraryDB';
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to ${DB_URI}`);
    }catch(err){
        console.log(`Error connecting to DB: ${err.message}`);
        process.exit(1);
    }
}   