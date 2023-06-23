const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const socketHandler = require('./socket');

const app = express();
const server = http.Server(app);
const io = socketIO(server);


app.set('port', process.env.PORT || 8080);

app.use(express.static(`${__dirname}/../build`));
app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

io.on('connection', socketHandler);

server.listen(app.get('port'), () => {
  console.log('socket is listening on port: 8080');
});
