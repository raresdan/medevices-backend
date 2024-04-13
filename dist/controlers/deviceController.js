"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDevice = exports.deleteDevice = exports.addDevice = exports.getDeviceById = exports.getDevices = void 0;
const dataStore_1 = require("../dataStore");
const device_1 = require("../models/device");
const getDevices = (req, res) => {
    res.json(dataStore_1.devices);
};
exports.getDevices = getDevices;
const getDeviceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const device = dataStore_1.devices.find(device => device.getId() === id);
    if (device) {
        res.json(device);
    }
    else {
        res.status(404).send('Device not found');
    }
});
exports.getDeviceById = getDeviceById;
const addDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, image } = req.body;
        const newDevice = new device_1.Device(name, price, image);
        dataStore_1.devices.push(newDevice);
        return res.status(201).json(newDevice);
    }
    catch (error) {
        console.error('Error adding device:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});
exports.addDevice = addDevice;
const deleteDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const index = dataStore_1.devices.findIndex(device => device.getId() === id);
    if (index > -1) {
        dataStore_1.devices.splice(index, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Device not found');
    }
});
exports.deleteDevice = deleteDevice;
const updateDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const device = dataStore_1.devices.find(device => device.getId() === id);
    if (device) {
        const { name, price, image } = req.body;
        device.setName(name);
        device.setPrice(price);
        device.setImage(image);
        res.json(device);
    }
    else {
        res.status(404).send('Device not found');
    }
});
exports.updateDevice = updateDevice;
