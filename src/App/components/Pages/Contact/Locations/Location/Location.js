// @flow
import React from 'react';
import { Card, Image, Label, Divider } from 'semantic-ui-react';


type Props = {
  img: string,
  name: string,
  address: string,
  timetable: string,
  contactNumber: string
};

const location = ({ img, name, address, timetable, contactNumber }: Props) => (
 <Card>
   <Image src={img}/>
   <Card.Content>
     <Card.Header>{name}</Card.Header>
     <Divider hidden/>
     <Card.Meta><Label size='large'>{address}</Label></Card.Meta>
     <Divider/>
     <Card.Description>{timetable}</Card.Description>
     <Divider/>
     <Card.Description>For more information, please, call us on: <Label size='large' color='olive' inverted>{contactNumber}</Label> </Card.Description>
   </Card.Content>
 </Card>
);

export default location;
