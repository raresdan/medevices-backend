"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
class Device {
    constructor(name, price, image) {
        this.id = Device.nextId++;
        this.name = name;
        this.price = price;
        this.image = image;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getImage() {
        return this.image;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setImage(image) {
        this.image = image;
    }
}
exports.Device = Device;
Device.nextId = 1;
exports.default = Device;
