import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cars: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }]
}, {
    timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;
