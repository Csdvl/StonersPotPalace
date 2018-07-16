const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.decrementProductsQuantity = functions.firestore.document('orders/{id}').onCreate(cart => {
  const cartData = cart.data();
  const cartItems = cartData.products;
  
  for ( let item of cartItems ) {
    const productRef = db.collection('products').doc(item.id);
    const transaction = db.runTransaction(t => {
      return t.get(productRef)
      .then(doc => {
        const newQuantity = doc.data().onStock - item.quantity;
        return t.update(productRef, { onStock: newQuantity });
      });
    }).then(result => {
      return console.log('Transaction success', result);
    }).catch(err => {
     return console.log('Transaction failure:', err);
    });
  }
  
});