import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) return res.status(404).send('No user found.');
        res.status(200).send('User deleted.');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
