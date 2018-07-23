import React from 'react';
import { Item, Divider } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


import Springfield from '../../../../../assets/images/shop/springfield.jpg';


const story = () => (
 <Item.Group>
   <Item>
     <Item.Image size='big' src={Springfield} />
     <Item.Content >
       <Item.Header>Where it all began...</Item.Header>
       <Divider hidden/>
       <Item.Description>
         Ad prompta perfecto indoctum vis, id ius ferri consul, dicit accusata complectitur an vel.
         Pri oratio dolorem sadipscing eu, ad usu vidit intellegat. Sed hinc eligendi ne, cum ne harum eripuit
         torquatos.
         Ius an solum nonumes. Vel an indoctum intellegebat, sit nullam eruditi at, at neglegentur complectitur vix.
         His ne enim lorem minimum <Link to='/story'>more...</Link>
       </Item.Description>
     </Item.Content>
   </Item>
 </Item.Group>
);

export default story;