import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Spinner from '../../components/UI/Spinner/Spinner';


class Auth extends Component {
  state = {
    isSignup: true
  };
  
  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      }
    })
  };
  
  
  render() {
    const {isSignup} =this.state;
    const { isAuth} = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    let auth = isSignup
     ? <Signup/>
     : <Signin/>;
     
    
    let authRedirect = null;
    if ( authenticated ) {
      authRedirect = <Redirect to="/"/>;
    }
    
    return (
     <Segment size='big' color='olive'>
       <Header content='Authentication'/>
       <Button color={isSignup ? 'violet' : 'purple'}
        onClick={this.switchAuthModeHandler}>Switch
         to {isSignup ? "Log In" : "Register"}
       </Button>
       {authRedirect}
       {auth}
     </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth
  }
};

export default connect(mapStateToProps)(Auth);