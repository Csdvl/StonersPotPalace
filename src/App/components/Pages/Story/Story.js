// @flow
import React from 'react';
import { Item, Divider } from 'semantic-ui-react';

import StonersPotPalace from '../../../../assets/images/shop/stonersPotPalace.png';


const story = () => (
   <Item.Group>
     <Item>
       <Item.Image size='big' src={StonersPotPalace}/>
       <Item.Content>
         <Item.Header>Our Story...</Item.Header>
         <Item.Meta>Description</Item.Meta>
         <Item.Description>fermentum nam ipsum consectetuer lacus blandit justo diam duis turpis lobortis duis vel augue
           luctus ante elementum suscipit nulla penatibus euismod fringilla parturient ut nibh purus vel ante curabitur
           tincidunt sed vel in et tortor ipsum auctor massa lectus nulla nibh nibh diam ac duis </Item.Description>
         <Divider hidden/>
         <Item.Description>vel nibh nibh amet lacus aliquet quis nulla fringilla nullam quisque vel senectus in massa
           nulla lacus tempus nunc vestibulum cras pretium lobortis wisi in suscipit elit tellus praesent nunc nullam
           nec
           et mollis feugiat</Item.Description>
         <Divider hidden/>
         <Item.Description>potenti congue lectus justo a congue aliquet blandit nisl accumsan duis leo mi sapien
           ullamcorper condimentum commodo urna eget eget amet ornare vel vivamus dolor turpis dictum nunc sed at proin
           penatibus turpis quam urna nulla augue mattis nec autem mauris dictum tempus pede molestie</Item.Description>
       </Item.Content>
     </Item>
   </Item.Group>
);

export default story;
