import React from 'react';
import { Menu, Dropdown, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const DropDownAuth = ({ isAuth, profile }) => {
  const dda = (
   <Menu.Item position="right">
     <Dropdown pointing="top right" text={profile.displayName || 'Tell us about you'}>
       <Dropdown.Menu>
         <Dropdown.Item as={NavLink} to='/user' text="My Details" icon="user"/>
         <Dropdown.Item as={NavLink} to='/account' text="Account Settings" icon="settings"/>
         <Dropdown.Item as={NavLink} to='/orders' text="My orders" icon="shop"/>
         <Dropdown.Item as={NavLink} to='/logout' text="Sign Out" icon="power"/>
       </Dropdown.Menu>
     </Dropdown>
   </Menu.Item>
  );
  
  return (
   <div>
     {isAuth ? dda : <Menu.Item as={NavLink} to="/auth" name='My Account'/>}
   </div>
  
  );
};

export default DropDownAuth;