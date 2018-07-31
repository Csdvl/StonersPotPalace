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
    const { isAuth, loading, error } = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    let auth = this.state.isSignup
     ? <Signup/>
     : <Signin/>;
    if ( loading ) {
      auth = <Spinner/>;
    }
    
    let errorMessage = null;
    if ( error ) {
      errorMessage = <p>{error.message}</p>
    }
    
    let authRedirect = null;
    if ( authenticated ) {
      authRedirect = <Redirect to="/"/>;
    }
    
    return (
     <Segment size='big' color='olive'>
       <Header content='Authentication'/>
       <Button color={this.state.isSignup ? 'violet' : 'purple'}
        onClick={this.switchAuthModeHandler}>Switch
         to {this.state.isSignup ? "Log In" : "Register"}
       </Button>
       {authRedirect}
       {errorMessage}
       {auth}
     </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.firebase.auth
  }
};

export default connect(mapStateToProps)(Auth);