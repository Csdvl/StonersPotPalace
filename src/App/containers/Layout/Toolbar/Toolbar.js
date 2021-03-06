// @flow
import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

import * as types from '../../../../Types/index';
import bakeryLogo from '../../../../assets/images/logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import DropDownAuth from '../NavigationItems/DropDownAuth';
import CartModal from '../../../components/Shop/ShoppingCart/CartModal/CartModal';


type Props = {
  authenticated: boolean,
  profile: types.Profile,
  cartItems: Array<types.CartItem>
};

const toolbar = ({authenticated, profile, cartItems}: Props) => (
 <Menu inverted fixed='top'>
   <Container>
     <Menu.Item position='left'>
       <Image src={bakeryLogo} alt='sugarRush' size='tiny'/>
     </Menu.Item>
     
     <Menu.Item as={NavigationItems} />
     
     <Menu.Menu position='right'>
       <Menu.Item as={CartModal} cartItems={cartItems} authenticated={authenticated} />
       <Menu.Item as={DropDownAuth} authenticated={authenticated} profile={profile} />
     </Menu.Menu>
   
   </Container>
 </Menu>
);

export default toolbar;