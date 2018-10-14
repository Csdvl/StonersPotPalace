// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import * as actions from '../../../../store/actions/index';


type Props = {
  onLogout: Function,
  firebase: {
    logout: Function
  }
};

class Logout extends Component<Props> {
  componentDidMount() {
    const { onLogout, firebase } = this.props;
    onLogout();
    firebase.logout();
  }
  
  render() {
    return <Redirect to="/"/>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.authLogout())
  };
};
// $FlowFixMe: suppressing this error until we can refactor
export default withFirebase(connect(null, mapDispatchToProps)(Logout));