import mongoose from 'mongoose';

const repairSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Oil Change'], // ? Expandir
    },
    date: {
        type: Date,
        required: true
    }
});

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    km: {
        type: Number,
        required: true,
    },
    repairs: [repairSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true 
});

const Car = mongoose.model('Car', carSchema);

export default Car;
