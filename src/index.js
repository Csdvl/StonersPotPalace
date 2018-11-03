import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { BrowserRouter } from 'react-router-dom';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from './firebase';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App/App';
import reducer from './store/reducers/index';
import ScrollToTop from './App/hoc/ScrollToTop';


const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false
};

const history = createBrowserHistory();

const middlewares = [ thunk.withExtraArgument({ getFirebase, getFirestore }), routerMiddleware(history) ];
const middlewareEnhancer = applyMiddleware(...middlewares);

const storeEnhancers = [ middlewareEnhancer ];

const composedEnhancer = composeWithDevTools(
 ...storeEnhancers,
 reactReduxFirebase(firebase, rrfConfig),
 reduxFirestore(firebase)
);

const store = createStore(reducer(history), {}, composedEnhancer);


const app = (
 <Provider store={store}>
   <BrowserRouter>
     <ConnectedRouter history={history} >
     <ScrollToTop>
       <App/>
       <ReduxToastr
        position='bottom-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
       />
     </ScrollToTop>
     </ConnectedRouter>
   </BrowserRouter>
 </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
