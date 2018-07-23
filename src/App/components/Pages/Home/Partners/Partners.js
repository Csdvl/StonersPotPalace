import React from 'react';
import { Item, List, Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const partners = () => (
 <Item.Group>
   <Item>
     <Item.Content>
       <Item.Header>Suppliers</Item.Header>
       <Item.Description>
         Lorem ipsum dolor sit amet, vestibulum proin. Nostra per maecenas. Eu scelerisque, mauris dolor.
         Lobortis aliquam, pharetra leo, quam ut etiam. Curabitur velit ut. Rhoncus scelerisque diam, sem orci quis.
       </Item.Description>
       <Divider hidden/>
       <Item.Extra>
         
         <Grid columns={2}>
           <Grid.Column>
           
           <List animated relaxed>
             <List.Item as='a' href='https://www.valrhona-chocolate.com/'>
               <List.Icon name='birthday cake' size='large' verticalAlign='middle'/>
               <List.Content>
                 <List.Header>Valrhona</List.Header>
                 <List.Description>https://www.valrhona-chocolate.com/</List.Description>
               </List.Content>
             </List.Item>
             
             <List.Item as='a' href='https://www.turnersfinefoods.com/'>
               <List.Icon name='dna' size='large' verticalAlign='middle'/>
               <List.Content>
                 <List.Header>Turners Fine Foods</List.Header>
                 <List.Description>https://www.turnersfinefoods.com/</List.Description>
               </List.Content>
             </List.Item>
             
             <List.Item as='a' href='http://www.albionfinefoods.com/'>
               <List.Icon name='truck' size='large' verticalAlign='middle'/>
               <List.Content>
                 <List.Header>Albion Fine Foods</List.Header>
                 <List.Description>http://www.albionfinefoods.com/</List.Description>
               </List.Content>
             </List.Item>
           </List>
           </Grid.Column>
           
           <Grid.Column>
    
             <List animated relaxed>
               <List.Item as='a' href='http://entremettier.co.uk/'>
                 <List.Icon name='map signs' size='large' verticalAlign='middle'/>
                 <List.Content>
                   <List.Header>Entremettier</List.Header>
                   <List.Description>http://entremettier.co.uk/</List.Description>
                 </List.Content>
               </List.Item>
      
               <List.Item as='a' href='https://www.nisbets.co.uk/'>
                 <List.Icon name='paw' size='large' verticalAlign='middle'/>
                 <List.Content>
                   <List.Header>Nisbets</List.Header>
                   <List.Description>https://www.nisbets.co.uk/</List.Description>
                 </List.Content>
               </List.Item>
      
               <List.Item as='a' href='http://www.gardnersfreshproduce.co.uk/'>
                 <List.Icon name='rocket' size='large' verticalAlign='middle'/>
                 <List.Content>
                   <List.Header>Gardners</List.Header>
                   <List.Description>http://www.gardnersfreshproduce.co.uk/</List.Description>
                 </List.Content>
               </List.Item>
             </List>
           </Grid.Column>
           
         </Grid>
         
       </Item.Extra>
     </Item.Content>
   </Item>
 </Item.Group>
);

export default partners;