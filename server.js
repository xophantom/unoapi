import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import carRoutes from './routes/carRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';


const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB)
.then(() => console.log('✅ MongoDB conectado.'))
.catch(err => console.error(err));

mongoose.set('debug', true);

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/users', userRoutes);
app.use('/cars', carRoutes);

app.listen(port, () => {
    console.log(`🚘 UnoApi em http://localhost:${port}`);
});


