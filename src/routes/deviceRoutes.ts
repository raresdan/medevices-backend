import { addDevice, deleteDevice, getDeviceById, getDevices, updateDevice } from '../controlers/deviceController';
const express = require('express');

const router = express.Router();

router.get('/devices', getDevices);
router.get('/devices/:id', getDeviceById);
router.post('/addDevice', addDevice);
router.delete('/devices/:id', deleteDevice);
router.put('/devices/:id', updateDevice);

export default router;

