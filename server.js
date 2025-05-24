const WebSocket = require('ws');
const express = require('express');
const app = express();

const wss = new WebSocket.Server({ port: 8080 },(ws)=>{
     console.log("hi")
});
console.log(app.port);


/* wss.on('connection',(ws)=>{
    ws.send("hi i am ready")
}) */