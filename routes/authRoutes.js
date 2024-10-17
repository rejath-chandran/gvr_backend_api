import express from 'express';
const router = express.Router()
import {signup, login, getUser} from '../controller/authController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authMiddleware,getUser);

export default router;