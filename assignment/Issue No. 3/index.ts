import { createStore } from './uniquedux'
import reducer from './reducer'

const store = createStore(
    reducer
);

export default store;