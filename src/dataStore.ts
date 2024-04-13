import { Device } from "./models/device";

let testDevice1: Device = new Device('X-Ray', 100, 'xray.jpg');
let testDevice2: Device = new Device('Stethoscope', 20, 'stethoscope.jpg');
let testDevice3: Device = new Device('Syringe', 5, 'syringe.jpg');
let testDevice4: Device = new Device('X-Ray', 100, 'xray.jpg');
let testDevice5: Device = new Device('Syringe', 7, 'syringe.jpg');
let testDevice6: Device = new Device('Stethoscope', 25, 'stethoscope.jpg');
let testDevice7: Device = new Device('X-Ray', 100, 'xray.jpg');
let testDevice8: Device = new Device('X-Ray', 100, 'xray.jpg');

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
