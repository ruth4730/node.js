import express from 'express';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to the Library');
})
app.use('/Books', bookRoute);
app.use('/Users', userRoute);
app.listen(5000, () => {
    console.log('Server is running on port 3000');
})