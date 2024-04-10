import express from 'express';
import mongoose from 'mongoose'
import StudentRouter from './router/students.js'
import AuthRouter from './router/auth.js'

const connectDB = async () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/sinhvien`)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error: '+error);
    }
}
const app = express();
app.use(express.json())
app.use('/api', StudentRouter)
app.use('/auth', AuthRouter )

app.listen(4000,()=>{
    connectDB();
    console.log(`Listening on port 4000`);
})