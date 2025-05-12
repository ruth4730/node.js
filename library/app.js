import express from 'express';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
import { addDate, printDate, blockDate } from './middlewares/AddDate.middleware.js';
import cors from 'cors';
import morgan from 'morgan';
import { not } from 'joi';
const app = express();
app.use(cors());
if(process.env.NODE_ENV !== 'development'){
    app.use(morgan('dev'));
}
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(addDate);
app.use(printDate);
app.use(blockDate);
app.get('/', (req, res) => {
    res.send('Welcome to the Library');
})
app.use('/Books', bookRoute);
app.use('/Users', userRoute);
app.use(notFound);
app.use(errorHandling);
app.listen(5000, () => {
    console.log('Server is running on port 3000');
})
