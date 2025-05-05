import express from 'express';
import userArr from '../models/users';
const router = express.Router();
router.post('/sign-in', (req, res) => {
    const {user}= req.body;
    userArr.find((u) => u.name === user.name && u.password === user.password) ? res.status(200).json({message: 'Login successful'}) : res.status(401).json({message: 'Invalid credentials'});
})
router.post('/sign-up', (req, res)=>{
    const {user}= req.body;
    userArr.push(user);
    res.status(201).json({
        message: 'User created successfully',
        user: user
    });
})
export default router;