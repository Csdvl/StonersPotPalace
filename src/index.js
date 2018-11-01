import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { BrowserRouter } from 'react-router-dom';
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

const middlewares = [ thunk.withExtraArgument({ getFirebase, getFirestore }) ];
const middlewareEnhancer = applyMiddleware(...middlewares);

const storeEnhancers = [ middlewareEnhancer ];

const composedEnhancer = composeWithDevTools(
 ...storeEnhancers,
 reactReduxFirebase(firebase, rrfConfig),
 reduxFirestore(firebase)
);

const store = createStore(reducer, {}, composedEnhancer);


const app = (
 <Provider store={store}>
   <BrowserRouter>
     <ScrollToTop>
       <App/>
       <ReduxToastr
        position='bottom-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
       />
     </ScrollToTop>
   </BrowserRouter>
 </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
