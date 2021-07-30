import {createStore} from "redux"
import todoooo from '../reducers/Reducer'

const store = createStore(todoooo,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store

  

