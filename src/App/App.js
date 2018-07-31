import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { withFirebase, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import * as actions from "../store/actions";
import Layout from './containers/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Shop from './containers/Shop/Shop';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import UserSettings from './containers/AuthUsers/User/UserSettings/UserSettings';
import UserInfo from './containers/AuthUsers/User/UserInfo/UserInfo';
import UserOrders from './containers/AuthUsers/User/UserOrders/UserOrders';
import CartCheckout from './containers/Shop/ShoppingCart/CartCheckout/CartCheckout';
import Contact from './components/Pages/Contact/Contact';
import Story from './components/Pages/Story/Story';
import ResetPassword from './containers/Auth/PasswordResetEmail/PasswordResetEmail';



class App extends Component {
  
  async componentDidMount() {
    const { firestore, initProducts } = this.props;
   await firestore.get('products');
   
    initProducts(this.props.products);
  }
  
  render() {
    
    const {isAuth} = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    let routes = (
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/story" component={Story}/>
       <Route path="/shop" componenet={Shop}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/auth" component={Auth}/>
       <Route path="/reset" component={ResetPassword}/>
       <Redirect to="/"/>
     </Switch>
    );
    if ( authenticated) {
      routes = (
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/story" component={Story}/>
         <Route path="/shop" component={Shop} />
         <Route path="/contact" component={Contact}/>
         <Route path="/orders" component={UserOrders}/>
         <Route path="/user" component={UserInfo}/>
         <Route path="/account" component={UserSettings}/>
         <Route path="/logout" component={Logout}/>
         <Route path="/checkout" render={() => <CartCheckout/>} />
         <Redirect to="/"/>
       </Switch>
      )
    }
    
    return (
     <Layout>
       <Switch>
         {routes}
         <Route render={() => <h1>Page Not Found</h1>}/>
       </Switch>
     </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth,
    products: state.firestore.ordered.products,
    cartItems: state.cart.cartItems
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initProducts: (products) => dispatch(actions.initProducts(products)),
  }
};

const app = hot(module)(App);

export default withRouter(withFirebase(withFirestore(connect(mapStateToProps, mapDispatchToProps)(app))));
