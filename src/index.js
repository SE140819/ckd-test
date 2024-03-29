import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { HelmetProvider } from 'react-helmet-async';
// import './assets/css/base.css';
// import './assets/css/optimizer.css';
// import './assets/css/style.min.css';
// import './assets/css/tuan.css';
// import './assets/css/text.min.css';
// import './assets/css/media.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
