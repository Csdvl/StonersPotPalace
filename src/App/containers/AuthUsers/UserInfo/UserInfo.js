import React from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react';

import UserInfoForm from './UserInfoForm/UserInfoForm';


const userInfo = ({updateUserProfile, initialValues}) => {
    return (
     <Segment color='olive'>
       <Header content='Personal Information' size='huge'/>
       <UserInfoForm
        updateUserProfile={updateUserProfile}
        initialValues={initialValues}
       />
       <Divider/>
       <div>Personal Address</div>
     </Segment>
    );
};

export default userInfo;
