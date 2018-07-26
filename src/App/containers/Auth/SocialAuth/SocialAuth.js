import React from 'react';
import { Button, Container, Divider, Icon } from 'semantic-ui-react';


const socialAuth = ({ login, socialAuth }) => (
 
 <Container fluid>
   <Button color='facebook'
           style={{ marginBottom: '15px', marginRight: '15px' }}
           onClick={() => socialAuth('facebook')}>
     <Icon name="facebook" />
     Login with Facebook
   </Button>
   
   <Button color='google plus'
           style={{ marginBottom: '15px' }}
           onClick={() => socialAuth('google')}>
     <Icon name="google plus" />
     Login with Google
   </Button>
 </Container>

);

export default socialAuth;
