import { faker } from '@faker-js/faker';
import Device from './models/device';


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

export const devices: Device[] = Array.from({length: 20}, () => {
    const name = medicalDeviceNames[faker.number.int({ min: 0, max: medicalDeviceNames.length - 1 })]
    const price = parseFloat(faker.commerce.price());
    const image = faker.image.url(); 

    return new Device(name, price, image);
});