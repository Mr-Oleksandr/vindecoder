
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { articleReducer } from '../redux/Reducer'

export const store = createStore(articleReducer, composeWithDevTools(applyMiddleware(thunk)))
export type RootState = ReturnType<typeof store.getState>