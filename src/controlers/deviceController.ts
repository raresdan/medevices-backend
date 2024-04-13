import { Request, Response } from 'express';
import { devices } from '../dataStore';
import { Device } from '../models/device';


export const getDevices = (req: Request, res: Response) => {
    res.json(devices);
};

export const getDeviceById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const device = devices.find(device => device.getId() === id);
    if (device) {
        res.json(device);
    } else {
        res.status(404).send('Device not found');
    }
};

export const addDevice = async (req: Request, res: Response) => {
    try {
        const { name, price, image } = req.body;
        const newDevice = new Device(
            name,
            price,
            image
        );
        devices.push(newDevice);
        return res.status(201).json(newDevice);
    } catch (error) {
        console.error('Error adding device:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export const deleteDevice = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = devices.findIndex(device => device.getId() === id);
    if (index > -1) {
        devices.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Device not found');
    }
}

export const updateDevice = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const device = devices.find(device => device.getId() === id);
    if (device) {
        const { name, price, image } = req.body;
        device.setName(name);
        device.setPrice(price);
        device.setImage(image);
        res.json(device);
    } else {
        res.status(404).send('Device not found');
    }
}