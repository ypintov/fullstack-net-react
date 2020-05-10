import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

    const store = createStore(rootReducer, composeEnhancers);

    return store;
}

export default configureStore;