import { combineReducers } from 'redux';

import todoReducer from './todo';
import usersReducer from './users';
import albumsReducer from './albums';
import { IState } from './state';

export const mainReducer = combineReducers<IState>({
  todoList: todoReducer,
  users: usersReducer,
  albums: albumsReducer,
});
