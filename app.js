var io = require('socket.io')({
  transports: ['websocket'],
});

io.attach(3001);

io.on('connection', function(socket){
  console.log("connected");
  socket.on('IORotateSender',function(data){
    console.log(data);
    io.sockets.emit('IORotateReceiver',data);

  })
})
