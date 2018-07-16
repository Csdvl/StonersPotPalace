import React, { Component } from 'react';
import {Segment, Header, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';

import {updateUserProfile} from '../../../../../store/actions';
import RegisterUserInfo from './RegisterUserInfo/RegisterUserInfo';


class UserInfo extends Component {
  render() {
  const {} = this.props;
  
    return (
     <Segment color='olive'>
       <Header content='Personal Information' size='huge'/>
       <RegisterUserInfo       />
       <Divider/>
       <div>Personal Address</div>
     </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.firebase.profile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserProfile: (user) => dispatch(updateUserProfile(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
