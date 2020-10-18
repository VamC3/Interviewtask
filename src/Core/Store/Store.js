import { createStore } from 'redux';

import rootReducer from '../Rootreducer/Rootreducer'

const store = createStore(rootReducer)

export default store