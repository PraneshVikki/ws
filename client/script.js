const server = new WebSocket('ws://127.0.0.1:8080/hi');
const mess = document.getElementById("mess");
const btn = document.getElementById("send");
const display = document.getElementById("display");

btn.addEventListener('click',(event)=>{
    server.send(mess.value);
}) 

server.onopen = function(event){
    console.log("opened")
    server.send("hi")
}

server.onmessage = (msg)=>{
    console.log(msg)
    const text = document.createElement("div");
    text.innerText = `User: ${msg.data}`;  
    display.appendChild(text)
}