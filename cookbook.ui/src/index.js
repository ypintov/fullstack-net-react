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


const history = createBrowserHistory();

const rootEl = document.getElementById('root');

const app = (
    <Router history={history}>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>
);

ReactDOM.render(app, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default history