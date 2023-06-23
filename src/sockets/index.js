import openSocket from 'socket.io-client';
import * as types from '../constants/ActionTypes';
import { messageReceived, populateUsersList } from '../actions';

function setupSocket (dispatch, username) {
  const socket = openSocket('http://localhost:8080');

  socket.on('connect', () => {
    socket.emit('message', JSON.stringify({
      type: types.ADD_USER,
      name: username,
      id: socket.id
    }));
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  });

  return socket;
}

export default setupSocket;