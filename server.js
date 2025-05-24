const WebSocket = require('ws');
const express = require('express');
const app = express();

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection',(ws)=>{
    ws.on('message',(mess)=>{
        console.log("wss.clients",wss.clients )
        wss.clients.forEach(function each(client){
            console.log("client",client)
            if(client.readyState === WebSocket.OPEN){
                client.send(mess.toString());
            }
        })
    })
})