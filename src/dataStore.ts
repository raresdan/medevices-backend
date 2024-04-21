import { de, faker } from '@faker-js/faker';
import { DeviceModel, IDevice } from './models/deviceModel';
import { BrandModel } from './models/deviceBrand';


const medicalDeviceNames = [
    'Heart Monitor',
    'Blood Pressure Monitor',
    'Pulse Oximeter',
    'Ventilator',
    'Defibrillator',
    'Ultrasound Machine',
    'MRI Machine',
    'CT Scanner',
    'X-Ray Machine',
    'Dialysis Machine'
];


export class DeviceList{

    public async addDevice(deviceData: any): Promise<IDevice> { 
        const brand = await BrandModel.findOne({name: deviceData.brand});
        if (!brand) {
            const newBrand = new BrandModel({name: deviceData.brand});
            await newBrand.save();
        }
        
        const device =  new DeviceModel(deviceData);
        const savedDevice = await device.save();
        return savedDevice;
    }

    public async createDevice(): Promise<IDevice> {
        const name = medicalDeviceNames[faker.number.int({ min: 0, max: medicalDeviceNames.length - 1 })];
        const price = parseFloat(faker.commerce.price());
        const brand = faker.company.name();
        const image = `https://source.unsplash.com/300x300/?${name}`;
        
        const deviceData = {
            name: name,
            price: price,
            brand: brand,
            image: image
        };
    
        const device =  new DeviceModel(deviceData);
        const savedDevice = await device.save();
        return savedDevice;
    }

    public async getDevices(): Promise<IDevice[]> {
        try {
            const devices = await DeviceModel.find({});
            return devices;
        } catch (error) {
            console.error('Error getting devices:', error);
            return [];
        }
    }
}

