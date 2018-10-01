import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions  from '../../../store/actions/index';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';


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
    const { isAuth, onRegister, onSocialAuth, onLogin} = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    let auth = isSignup
     ? <Signup onRegister={onRegister} onSocialAuth={onSocialAuth}/>
     : <Signin onLogin={onLogin} onSocialAuth={onSocialAuth}/>;
     
    
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

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user) => dispatch(actions.authRegister(user)),
    onSocialAuth: (selectedProvider) => dispatch(actions.socialAuth(selectedProvider)),
    onLogin: (creds) => dispatch(actions.authLogin(creds)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);