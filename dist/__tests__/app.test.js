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
const app = require("../app");
const request = require("supertest");
console.log(typeof app);
describe('API Tests', () => {
    let createdDeviceId;
    it('should return a list of devices', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app).get('/api/devices');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    }));
    it('should create a new device', () => __awaiter(void 0, void 0, void 0, function* () {
        const newDevice = {
            name: 'Test Device',
            price: 100,
            image: 'test.jpg',
        };
        const response = yield request(app).post('/api/addDevice').send(newDevice);
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
        createdDeviceId = response.body.device.id;
    }));
    it('should get a specific car by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app).get(`/api/devices/${createdDeviceId}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual('Test Device');
        expect(response.body.price).toEqual(100);
        expect(response.body.image).toEqual('test.jpg');
    }));
    it('should update an existing device', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedDevice = {
            name: 'Updated Device',
            price: 100,
            image: 'test1.jpg',
        };
        const response = yield request(app)
            .put(`/api/devices/${createdDeviceId}`)
            .send(updatedDevice);
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual('Test Device');
        expect(response.body.price).toEqual(100);
        expect(response.body.image).toEqual('test1.jpg');
    }));
    it('should delete an existing device', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app).delete(`/api/devices/${createdDeviceId}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Device deleted successfully');
    }));
});
