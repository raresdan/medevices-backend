import http from 'http';
import { Server } from 'socket.io';
import Device from './models/device';
import { createDevice, devices } from './dataStore';

const app = require('./app');


const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {

  setInterval(() => {
    const device: Device = createDevice();
    devices.push(device);
    socket.emit('newDevice', device);
  }, 7000);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/api`);
});