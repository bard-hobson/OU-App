import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.module.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const jsx = (
   <div>
       <App />
   </div>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
