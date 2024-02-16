import Car from '../models/Car.js';
import User from '../models/User.js';

export const createCar = async (req, res) => {
    const { brand, model, year, km, userEmail } = req.body; 

    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).send('User not found.');
        }

        const newCar = new Car({
            brand,
            model,
            year,
            km,
            user: user._id 
        });

        const savedCar = await newCar.save();

        user.cars.push(savedCar._id);
        await user.save();

        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addCarRepair = async (req, res) => {
    const { carId } = req.params;
    const { type, date } = req.body;

    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).send('Car not found.');
        }

        car.repairs.push({ type, date });
        await car.save();

        res.status(200).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.carId);
        if (!car) return res.status(404).send('No car found.');
        res.status(200).send('Car deleted.');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRepair = async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);
        if (!car) return res.status(404).send('Car not found.');

        car.repairs = car.repairs.filter(repair => repair._id.toString() !== req.params.repairId);
        await car.save();

        res.status(200).send('Repair deleted.');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
