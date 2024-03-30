
import express from 'express';
import { getDevices } from '../controlers/deviceController';

const router = express.Router();

router.get('/devices', getDevices);

export default router;
