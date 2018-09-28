import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Aux from '../../hoc/auxiliary';
import Toolbar from './Toolbar/Toolbar';


class Layout extends Component {
  
  render() {
    const { isAuth, profile, cartItems } = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    return (
     <Aux>
       <Toolbar
        isAuth={authenticated}
        profile={profile}
        cartItems={cartItems}
       />
     
       <Grid  textAlign='center'>
         <Grid.Column width={10} textAlign='center' style={{marginTop: '72px'}}>
           {this.props.children}
         </Grid.Column>
       </Grid>
       <Divider hidden/>
       <footer>Footer Copyright @ pula mea || mangiare mi il cazzo</footer>
     </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth,
    profile: state.firebase.profile,
    cartItems: state.cart.cartItems,
  }
};

export default connect(mapStateToProps)(Layout);