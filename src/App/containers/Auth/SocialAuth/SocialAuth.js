import React from 'react';
import {Button, Container} from 'semantic-ui-react';


const socialAuth = ({ login, socialAuth }) => (
 
 <Container fluid>
   <Button onClick={() => socialAuth('facebook')}>
     <span name="facebook"/>
     {login ? "Login" : "Register"} with Facebook
   </Button>
   
   <Button onClick={() => socialAuth('google')}>
     <span name="google plus"/>
     {login ? "Login" : "Register"} with Google
   </Button>
 </Container>

);

export default socialAuth;
