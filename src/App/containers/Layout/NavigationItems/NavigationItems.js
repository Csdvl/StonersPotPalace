import React from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


const navigationItems = () => (
 <Menu inverted color='olive' >
     <Menu.Item as={NavLink} to='/' exact name='Home' />
   <Menu.Item as={NavLink} to='/story' name='Story' />
   <Menu.Item as={NavLink} to='/shop' name='Shop' />
   <Menu.Item as={NavLink} to='/contact' name='Contact' />
 </Menu>
);

export default navigationItems;