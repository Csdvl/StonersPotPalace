import React, { Component } from 'react';
import {Container, Divider} from 'semantic-ui-react';

import Welcome from './Welcome/Welcome';
import Story from './Story/Story';
import Partners from './Partners/Partners';
import Guild from './Guild/Guild';


class Home extends Component {
  render() {
    return (
       <Container fluid >
         <Welcome />
         <Divider style={{marginTop: '45px', marginBottom: '45px'}}/>
         <Story />
         <Divider style={{marginTop: '45px', marginBottom: '45px'}}/>
         <Partners />
         <Divider style={{marginTop: '45px', marginBottom: '45px'}}/>
         <Guild />
       </Container>
    );
  }
}

export default Home;