const socket = io();
var video = document.getElementById("myvideo");

const play = () =>{
    video.paused?socket.emit('state',{state:true}): socket.emit('state',{state:false});
 }
const left = ()=>{
    socket.emit('time',{time:-1});
}

const right = ()=>{
    socket.emit('time',{time:1});
}

const stop = ()=>{
    socket.emit('time',{time:0});
}

socket.on('state',(data)=>{
    data.state?video.play(): video.pause()
})

socket.on('time',(data)=>{
    if(data.time == 0){
        video.currentTime = 0;
        video.pause(); 
    }else if(data.time > 0){
        video.currentTime += 1;
    }else{
        video.currentTime -= 1;
    }
})
