import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import Locations from './Locations/Locations';
import ContactForm from './ContactForm/ContactForm';


const contact = () => {
  return (
   <Container>
     <Locations/>
     <Divider/>
     <ContactForm/>
   </Container>
  );
};

export default contact;
