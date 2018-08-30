import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

import bakeryLogo from '../../../../../assets/images/logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import DropDownAuth from '../NavigationItems/DropDownAuth';
import CartModal from '../../../Shop/ShoppingCart/CartModal/CartModal';
// import DrawerToggle from '../w_SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
 <Menu inverted fixed='top'>
   <Container>
     {/*<Menu.Item as={DrawerToggle} onClick={props.sideDrawerToggle}/>*/}
     <Menu.Item position='left'>
       <Image src={bakeryLogo} alt='sugarRush' size='tiny'/>
     </Menu.Item>
     
     <Menu.Item as={NavigationItems} isAuth={props.isAuth}/>
     
     <Menu.Menu position='right'>
       <Menu.Item as={CartModal} isAuth={props.isAuth} />
       <Menu.Item as={DropDownAuth} isAuth={props.isAuth} profile={props.profile} />
     </Menu.Menu>
   
   </Container>
 </Menu>
);

export default toolbar;