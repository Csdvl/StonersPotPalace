// @flow
import React, { Component } from 'react';
import { Segment, Header, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index'
import * as types from '../../../../Types/index';
import ChangePassword from './ChangePassword/ChangePassword';
import ChangeEmail from './ChangeEmail/ChangeEmail';


type Props = {
  providerId: string,
  updatePassword: SyntheticEvent<HTMLElement> => void,
  updateEmail: SyntheticEvent<HTMLElement> => void
};

class UserSettings extends Component<Props> {
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

const mapDispatchToProps = (dispatch ) => {
  return {
    updatePassword: (creds: Object) => dispatch(actions.updatePassword(creds)),
    updateEmail: (creds: Object) => dispatch(actions.updateEmail(creds)),
  }
};
// $FlowFixMe: suppressing this error until react-redux fixes type annotations
export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
