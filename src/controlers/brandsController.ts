import { Request, Response } from 'express';
import { BrandModel } from '../models/deviceBrand';
import { DeviceModel } from '../models/deviceModel';
import { Brand } from '../models/brand';
import { BrandsRepository } from '../repositories/brandsRepository';


export const brands = new BrandsRepository();

export const getBrands = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 0;
        const allBrands = await brands.getBrands(page);
        res.json(allBrands);
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
    const brand = await BrandModel.find({ brand_id: id });
    if (brand.length > 0) {
        res.json(brand);
    } else {
        res.status(404).send('Brand not found');
    }
};

export const addBrand = async (req: Request, res: Response) => {
    try {
        const {  name } = req.body;
        const newBrand = new Brand(
            name
        );
        brands.addBrand(newBrand);
        return res.status(201).json(newBrand);
    } catch (error) {
        console.error('Error adding device:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export const deleteBrand = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const brand = await BrandModel.findOne({ brand_id: id });
    if (!brand) {
        res.status(404).send('Brand not found');
    } else {
        await brand.deleteOne();
        res.status(204).send();
    }
}

export const updateBrand = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const brand: any = await BrandModel.findOne({ brand_id: id });
    if (brand.length === 0) {
        res.status(404).send('Brand not found');
    } else {
        const { name } = req.body;
        brand.name = name;

        await brand.save();
        res.json(brand);
    }
}