import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import ScrollToTop from './app/layout/ScrollToTop';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.min.css'
import configureStore from './app/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const history = createBrowserHistory();

const rootEl = document.getElementById('root');

const app = (
    <Provider store={store}>
        <Router history={history}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>

);

ReactDOM.render(app, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default history