import express from 'express';
import { addCarRepair, createCar, deleteCar, deleteRepair } from '../controllers/carController.js';

const router = express.Router();

router.post('/create-car', 
createCar);

router.post('/:carId/repairs', 
addCarRepair);

router.delete('/:carId', 
deleteCar);

router.delete('/:carId/repairs/:repairId', 
deleteRepair);

export default router;
