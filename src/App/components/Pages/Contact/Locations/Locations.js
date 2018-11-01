// @flow
import React from 'react';
import { Card, Segment, Header } from 'semantic-ui-react';

import Location from './Location/Location';
import Loc1 from '../../../../../assets/images/shop/locations/loc1.jpg';
import Loc2 from '../../../../../assets/images/shop/locations/loc2.jpg';
import Loc3 from '../../../../../assets/images/shop/locations/loc3.jpg';


const locations = () => {
  
  const locationList = [
    {
      img: Loc1,
      name: 'De Bevoir Estate',
      address: '420 Bakers Street, London, N1 5TN',
      timetable: 'M-F: 10:00 - 22:00, S-S: 08:00 - 24:00',
      contactNumber: '07506272144'
    },
    
    {
      img: Loc2,
      name: 'Stepney Green',
      address: '007 Master Wankers Road, London, E1 3DP',
      timetable: 'M-F: 10:00 - 22:00, S-S: 08:00 - 24:00',
      contactNumber: '07377653838'
    },
    
    {
      img: Loc3,
      name: 'Coolest Place on Earth(witch is flat...duh!)',
      address: '69 King of the Hill, London, N1 6AH',
      timetable: 'M-F: 10:00 - 22:00, S-S: 08:00 - 24:00',
      contactNumber: '07597557942'
    },
  ];
  
  const locations = locationList.map(location => (
   <Location
    img={location.img}
    name={location.name}
    address={location.address}
    timetable={location.timetable}
    contactNumber={location.contactNumber}
   />
  ));
  
  return (
   <Segment size='huge' inverted>
     <Header>Our shops</Header>
     <Card.Group itemsPerRow={2} >
       {locations}
     </Card.Group>
   </Segment>
  );
};

export default locations;
