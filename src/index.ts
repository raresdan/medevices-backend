import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { devices } from './controlers/deviceController';

const app = require('./app');


const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {

  setInterval(async () => {
    try {
      const device = await devices.createDevice();
      socket.emit('newDevice', device);
    } catch (error) {
      console.error('Error generating and saving device:', error);
    }
  }, 10000);
});

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGODB_URI || 
            'mongodb+srv://goiararesdan:ZqJAiP3zFsyna0Qk@medicaldatabase.kkiup4i.mongodb.net/?retryWrites=true&w=majority&appName=MedicalDatabase';

mongoose.connect(MONGOURI)
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/api`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });