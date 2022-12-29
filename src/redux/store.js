import { movieReducer } from "./reducers/movieReducer";
import { createStore } from 'redux'

export const store = createStore(movieReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());