// @flow
import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import * as types from '../../../../Types/index';


type Props = {
  authenticated: boolean,
  profile: types.Profile
};

const DropDownAuth = ({ authenticated, profile }: Props) => {
  const dda = (
   <Menu.Item position="right">
     <Dropdown pointing="top right" text={profile.displayName || 'Tell us about you'}>
       <Dropdown.Menu>
         <Dropdown.Item as={NavLink} to='/user' data-test="details" text="My Details" icon="user"/>
         <Dropdown.Item as={NavLink} to='/account' text="Account Settings" icon="settings"/>
         <Dropdown.Item as={NavLink} to='/orders' text="My orders" icon="shop"/>
         <Dropdown.Item as={NavLink} to='/logout' text="Sign Out" icon="power"/>
       </Dropdown.Menu>
     </Dropdown>
   </Menu.Item>
  );
  
  return (
   <div>
     {authenticated ? dda : <Menu.Item as={NavLink} to="/auth" name='My Account'/>}
   </div>
  
  );
};

export default DropDownAuth;