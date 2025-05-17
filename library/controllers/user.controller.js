import User from '../models/users.model.js';
export const signUp = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const user = new User({ userName, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next({ message: err.message })
    }
}
export const signIn = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const user = User.findOne({ userName, password });
        res.status(200).json(user);
    } catch (err) {
        next({ message: err.message })
    }
}