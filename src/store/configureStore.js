import { createStore } from 'redux';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = createStore(
        filtersReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};