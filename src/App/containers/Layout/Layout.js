// @flow
import * as React from 'react';
import  { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Aux from '../../hoc/auxiliary';
import Toolbar from './Toolbar/Toolbar';


type Props = {
  children: React.Node,
  isAuth: {
    isLoaded: boolean,
    isEmpty: boolean
  },
  profile: Object,
  cartItems: Array<Object>
};

class Layout extends Component<Props> {
  
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