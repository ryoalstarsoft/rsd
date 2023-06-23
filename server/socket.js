// TODO: handle storage.
const users = [];

const socketHandler = (socket) => {
  socket.on('message', (message) => {
    const action = JSON.parse(message);
    switch (action.type) {
      case 'ADD_USER': {
        const { name, id } = action;
        console.log(action);
        users.push({ name, id });
        socket.emit('message', JSON.stringify({
          type: 'USERS_LIST',
          users
        }));
        socket.broadcast.emit('message', JSON.stringify({
          type: 'USERS_LIST',
          users
        }));
        break;
      }
      case 'ADD_MESSAGE': {
        console.log(action);
        socket.broadcast.emit('message', JSON.stringify({
          type: 'ADD_MESSAGE',
          message: action.message,
          author: action.author,
          id: action.id
        }));
        break;
      }
      default: {
        break;
      }
    }
  });

  socket.on('disconnect', () => {
    const index = users.findIndex(user => user.id === socket.id);
    users.splice(index, 1);
    socket.broadcast.emit('message', JSON.stringify({
      type: 'USERS_LIST',
      users
    }));
  });
};

module.exports = socketHandler;
