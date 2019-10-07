import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';
import './styles/styles.module.scss';
import Layout from './hoc/Layout';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <Layout />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();