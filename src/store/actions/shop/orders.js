// @flow
import * as actionTypes from '../actionTypes';
import * as types from '../../../Types/index';
import firebase from '../../../firebase';

const fetchOrders = (orders): types.FetchOrdersInit => ({
  type: actionTypes.FETCH_ORDERS,
  orders
});

export const fetchOrdersInit = (): types.OrdersThunkAction => {
  return async (dispatch) => {
    
    const user = firebase.auth().currentUser;
    const firestore = firebase.firestore();
    const ordersRef = firestore.collection('orders');
    
    try {
    let querySnapOrders = await ordersRef.where('userId', '==', user.uid).get();
    let filteredOrders = [];
    
    for ( let i = 0; i < querySnapOrders.docs.length; i++ ) {
      let filOrd = {...querySnapOrders.docs[i].data(), id: querySnapOrders.docs[i].id};
      filteredOrders.push(filOrd);
    }
    dispatch(fetchOrders(filteredOrders))
    } catch (e) {
      console.log(e)
    }
  }
};