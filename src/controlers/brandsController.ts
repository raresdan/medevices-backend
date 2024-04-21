import { Request, Response } from 'express';
import { BrandModel } from '../models/deviceBrand';
import { DeviceModel } from '../models/deviceModel';




export const getBrands = async (req: Request, res: Response) => {
    try {
        const brands = await BrandModel.find({});
        res.json(brands);
      } catch (error) {
        console.error('Error getting brands:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

export const getDevicesByBrand = async (req: Request, res: Response) => {
    const brand = req.params.brand;
    const devices = await DeviceModel.find({ brand: brand });
    if (devices.length > 0) {
        res.json(devices);
    } else {
        res.status(404).send('Devices not found');
    }
}

export const getBrandById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const brand = await BrandModel.find({ id: id });
    if (brand.length > 0) {
        res.json(brand);
    } else {
        res.status(404).send('Brand not found');
    }
};

export const addBrand = async (req: Request, res: Response) => {
    try {
        const brand = new BrandModel(req.body);
        const savedBrand = await brand.save();
        res.status(201).json(savedBrand);
      } catch (error) {
        console.error('Error adding brand:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export const deleteBrand = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const brand = await BrandModel.findOne({ id: id });
    if (!brand) {
        res.status(404).send('Brand not found');
    } else {
        await brand.deleteOne();
        res.status(204).send();
    }
    res.json(brand);
}

export const updateBrand = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const brand: any = await BrandModel.findOne({ id: id });
    if (brand.length === 0) {
        res.status(404).send('Brand not found');
    } else {
        const { name } = req.body;
        brand.name = name;

        await brand.save();
        res.json(brand);
    }
}