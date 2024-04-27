import { addBrand, deleteBrand, getBrandById, getBrands, getDevicesByBrand, updateBrand } from '../controlers/brandsController';
import { addDevice, deleteDevice, getDeviceById, getDevices, updateDevice } from '../controlers/deviceController';
const express = require('express');

const router = express.Router();

// Routes for devices
router.get('/devices', getDevices);
router.get('/devices/:id', getDeviceById);
router.post('/addDevice', addDevice);
router.delete('/devices/:id', deleteDevice);
router.put('/devices/:id', updateDevice);

// Routes for brands
router.get('/brands', getBrands);
router.get('/brands/:brand', getDevicesByBrand);
router.get('/brands/:id', getBrandById);
router.post('/addBrand', addBrand);
router.delete('/brands/:id', deleteBrand);
router.put('/brands/:id', updateBrand);

export default router;

