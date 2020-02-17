import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware); // lets us dispatch() functions
  
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;
  
    const composedEnhancers = composeEnhancers(middlewareEnhancer);    
    const store = createStore(rootReducer, preloadedState, composedEnhancers);
  
    return store;
  }