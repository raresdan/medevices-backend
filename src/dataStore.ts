import { Device } from "./models/device";

let testDevice1: Device = new Device(1, 'X-Ray', 100, 'xray.jpg');
let testDevice2: Device = new Device(2, 'Stethoscope', 20, 'stethoscope.jpg');
let testDevice3: Device = new Device(3, 'Syringe', 5, 'syringe.jpg');
let testDevice4: Device = new Device(4, 'X-Ray', 100, 'xray.jpg');
let testDevice5: Device = new Device(5, 'Syringe', 7, 'syringe.jpg');
let testDevice6: Device = new Device(6, 'Stethoscope', 25, 'stethoscope.jpg');
let testDevice7: Device = new Device(7, 'X-Ray', 100, 'xray.jpg');
let testDevice8: Device = new Device(8, 'X-Ray', 100, 'xray.jpg');

export const devices: Device[] = [
    testDevice1,
    testDevice2,
    testDevice3,
    testDevice4,
    testDevice5,
    testDevice6,
    testDevice7,
    testDevice8,
];
