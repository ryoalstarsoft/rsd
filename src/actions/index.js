import * as types from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

let nextMessageId = 0;
const nextUserId = 0;

// export const addMessage = (message, author) => ({
//   type: types.ADD_MESSAGE,
//   id: nextMessageId++,
//   message,
//   author
// });

export const addMessage = createAction(
  types.ADD_MESSAGE,
  ({ message, author }) => ({ id: nextMessageId++, message, author })
);

// export const messageReceived = (message, author) => ({
//   type: types.MESSAGE_RECEIVED,
//   id: nextMessageId++,
//   message,
//   author
// });

export const messageReceived = createAction(
  types.MESSAGE_RECEIVED,
  ({ message, author }) => ({ id: nextMessageId++, message, author })
);

// export const populateUsersList = users => ({
//   type: types.USERS_LIST,
//   users
// });

export const populateUsersList = createAction(
  types.USERS_LIST,
  ({ })
)
