import React, { Component } from 'react';
import {Segment, Header, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';

import {updateUserProfile} from '../../../../../store/actions';
import RegisterUserInfo from './UserInfoForm/UserInfoForm';


class UserInfo extends Component {
  render() {
  const {} = this.props;
  
    return (
     <Segment color='olive'>
       <Header content='Personal Information' size='huge'/>
       <RegisterUserInfo
       // initialValues={this.props.initialValues}
       />
       <Divider/>
       <div>Personal Address</div>
     </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // initialValues: state.firebase.profile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserProfile: (user) => dispatch(updateUserProfile(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
