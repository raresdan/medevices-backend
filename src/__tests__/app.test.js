const request = require("supertest");
const app = require("../app");


describe('API Tests', () => {
    let createdDeviceId;

    test('should return a list of devices', async () => {
        const response = await request(app).get('/api/devices');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('should create a new device', async () => {
        const newDevice = {
            name: 'Test Device',
            price: 100,
            image: 'test.jpg',
        };

        const response = await request(app).post('/api/addDevice').send(newDevice);
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
        createdDeviceId = response.body.id;
    });

    test('should get a specific device by ID', async () => {
        const response = await request(app).get(`/api/devices/${createdDeviceId}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual('Test Device');
        expect(response.body.price).toEqual(100);
        expect(response.body.image).toEqual('test.jpg');
      });

    test('should update an existing device', async () => {
        const updatedDevice = {
            name: 'Updated Device',
            price: 100,
            image: 'test1.jpg',
        };

        const response = await request(app)
            .put(`/api/devices/${createdDeviceId}`)
            .send(updatedDevice);
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual('Updated Device');
        expect(response.body.price).toEqual(100);
        expect(response.body.image).toEqual('test1.jpg');
    });

    test('should delete an existing device', async () => {
        const response = await request(app).delete(`/api/devices/${createdDeviceId}`);
        expect(response.statusCode).toEqual(204);
    });

    test('should return 404 for non-existing test', async () => {
        const nonExistingId = '11111';
        const res = await request(app).get(`/api/devices/${nonExistingId}`);
        expect(res.statusCode).toEqual(404);
      });
}); 
