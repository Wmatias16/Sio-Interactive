const express = require('express');
const socket = require('socket.io');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));


const server = app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

const io = socket(server);

io.on('connection',(socket)=>{
    socket.on('state',(data)=>{
        io.sockets.emit('state',data);
    })
    
    socket.on('time',(data)=>{
        io.sockets.emit('time',data);
    })
});