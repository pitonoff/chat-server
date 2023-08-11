const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Добавьте эту строку

const app = express();
app.use(cors()); // Используйте cors

const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
