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
import UserSettings from './containers/AuthUsers/UserSettings/UserSettings';
import UserInfo from './containers/AuthUsers/UserInfo/UserInfo';
import UserOrders from './containers/AuthUsers/UserOrders/UserOrders';
import CartCheckout from './containers/Shop/ShoppingCart/CartCheckout/CartCheckout';
import Contact from './components/Pages/Contact/Contact';
import Story from './components/Pages/Story/Story';
import ResetPassword from './containers/Auth/PasswordResetEmail/PasswordResetEmail';


class App extends Component {
  
  async componentDidMount() {
    const { initProducts } = this.props;
    
    initProducts();
  }
  
  render() {
    
    const { isAuth, updateUserProfile, profile, orders, fetchOrdersInit, providerId, updatePassword, updateEmail, products, addToCart, resetPasswordEmail } = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    let routes = (
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/story" component={Story}/>
       <Route path="/shop" render={() => <Shop products={products} addToCart={addToCart}/>}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/auth" component={Auth}/>
       <Route path="/reset" render={() => <ResetPassword resetPasswordEmail={resetPasswordEmail}/>}/>
       <Redirect to="/"/>
     </Switch>
    );
    if ( authenticated ) {
      routes = (
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/story" component={Story}/>
         <Route path="/shop" render={() => <Shop products={products} addToCart={addToCart}/>}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/orders" render={() => <UserOrders orders={orders} fetchOrdersInit={fetchOrdersInit}/>}/>
         <Route path="/user" render={() => <UserInfo updateUserProfile={updateUserProfile} initialValues={profile}/>}/>
         <Route path="/account" render={() => <UserSettings providerId={providerId} updatePassword={updatePassword}
                                                            updateEmail={updateEmail}/>}/>
         <Route path="/logout" component={Logout}/>
         <Route path="/checkout" render={() => <CartCheckout/>}/>
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
    products: state.products,
    profile: state.firebase.profile,
    orders: state.orders,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initProducts: (products) => dispatch(actions.initProducts(products)),
    updateUserProfile: (user) => dispatch(actions.updateUserProfile(user)),
    fetchOrdersInit: () => dispatch(actions.fetchOrdersInit()),
    addToCart: (productId, photoURL, label, price, onStock) => dispatch(actions.addToCart(productId, photoURL, label, price, onStock)),
    resetPasswordEmail: (email) => dispatch(actions.resetPasswordEmail(email)),
  }
};

const app = hot(module)(App);

export default withRouter(withFirebase(withFirestore(connect(mapStateToProps, mapDispatchToProps)(app))));
