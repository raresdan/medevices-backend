"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devices = void 0;
const device_1 = require("./models/device");
let testDevice1 = new device_1.Device('X-Ray', 100, 'xray.jpg');
let testDevice2 = new device_1.Device('Stethoscope', 20, 'stethoscope.jpg');
let testDevice3 = new device_1.Device('Syringe', 5, 'syringe.jpg');
let testDevice4 = new device_1.Device('X-Ray', 100, 'xray.jpg');
let testDevice5 = new device_1.Device('Syringe', 7, 'syringe.jpg');
let testDevice6 = new device_1.Device('Stethoscope', 25, 'stethoscope.jpg');
let testDevice7 = new device_1.Device('X-Ray', 100, 'xray.jpg');
let testDevice8 = new device_1.Device('X-Ray', 100, 'xray.jpg');
exports.devices = [
    testDevice1,
    testDevice2,
    testDevice3,
    testDevice4,
    testDevice5,
    testDevice6,
    testDevice7,
    testDevice8,
];
