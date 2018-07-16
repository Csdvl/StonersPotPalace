import React from 'react';

import classes from './Toolbar.scss';
import Logo from '../../../../components/w_Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../w_SideDrawer/DrawerToggle/DrawerToggle';
import DropDownAuth from '../NavigationItems/DropDownAuth';
import CartModal from '../../../Shop/ShoppingCart/CartModal/CartModal';


const toolbar = (props) => (
 <header className={classes.Toolbar}>
   <DrawerToggle onClick={props.sideDrawerToggle}/>
   <Logo />
   <nav className={classes.DesktopOnly}>
     <NavigationItems isAuth={props.isAuth} />
   </nav>
   <nav>
     <CartModal />
     <DropDownAuth isAuth={props.isAuth} profile={props.profile} />
   </nav>
 </header>
);

export default toolbar;