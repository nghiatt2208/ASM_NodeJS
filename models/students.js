import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
},
{
    timestamps: true
}
)

const studentModel = mongoose.model('students', studentSchema)
export default studentModel;