const express = require('express');
const path = require('path');
const http = require('http');
const ws = require('ws');

const app = express();

// HTTP Server

app.use(express.static(path.join(__dirname, '../../dist/websocket-charts')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/websocket-charts/index.html'));
});

const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`HTTP server running on port ${port}...`);
});

// WebSocket Server

const wsPort = 8088;
const wsServer = new ws.Server({port: wsPort});

console.log(`WebSocket server is running on port ${wsPort}...`);

wsServer.on('connection',
           websocket => {
                setInterval(() => {
                  // Broadcasting to all clients
                  wsServer.clients.forEach(
                    client => client.send(JSON.stringify({
                      value: Math.random() * 50,
                      time: new Date()
                    })));
                }, 1000);

                websocket.on('message', message => {
                  const now = new Date();
                  wsServer.clients.forEach(
                    client => client.send(JSON.stringify({
                      text: message,
                      time: now })));
                });
           });
