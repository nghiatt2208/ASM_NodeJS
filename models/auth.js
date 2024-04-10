import mongoose from 'mongoose';

const AuthSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const AuthModel = mongoose.model('auth', AuthSchema)
export default AuthModel;