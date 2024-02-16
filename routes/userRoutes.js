import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-user', 
getUsers);

router.post('/create-user', 
createUser);

router.delete('/:userId', 
deleteUser);

export default router;
