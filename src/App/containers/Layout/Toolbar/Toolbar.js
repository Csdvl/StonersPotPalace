// @flow
import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

import * as types from '../../../../Types/index';
import bakeryLogo from '../../../../assets/images/logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import DropDownAuth from '../NavigationItems/DropDownAuth';
import CartModal from '../../../components/Shop/ShoppingCart/CartModal/CartModal';


type Props = {
  isAuth: types.IsAuth,
  profile: types.Profile,
  cartItems: Array<types.OrderProduct>
};

const toolbar = ({isAuth, profile, cartItems}: Props) => (
 <Menu inverted fixed='top'>
   <Container>
     <Menu.Item position='left'>
       <Image src={bakeryLogo} alt='sugarRush' size='tiny'/>
     </Menu.Item>
     
     <Menu.Item as={NavigationItems} isAuth={isAuth}/>
     
     <Menu.Menu position='right'>
       <Menu.Item as={CartModal} cartItems={cartItems} isAuth={isAuth} />
       <Menu.Item as={DropDownAuth} isAuth={isAuth} profile={profile} />
     </Menu.Menu>
   
   </Container>
 </Menu>
);

export default toolbar;