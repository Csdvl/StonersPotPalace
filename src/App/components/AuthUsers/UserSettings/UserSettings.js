import React, { Component } from 'react';
import {Item, Segment, Header, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index'
import ChangePassword from './ChangePassword/ChangePassword';
import ChangeEmail from './ChangeEmail/ChangeEmail';


class UserSettings extends Component {
  render() {
    const {providerId, updatePassword, updateEmail} =this.props;
    return (
     <Segment color='olive'>
       <Header size='huge' style={{marginBottom: '20px'}} >Account Settings</Header>
       <ChangePassword updatePassword={updatePassword} providerId={providerId}/>
       <Divider section />
       <ChangeEmail updateEmail={updateEmail}/>
     </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    providerId: state.firebase.auth.providerData[0].providerId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updatePassword: (creds) => dispatch(actions.updatePassword(creds)),
    updateEmail: (creds) => dispatch(actions.updateEmail(creds)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
