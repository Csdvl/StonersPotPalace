import React, { Component } from 'react';
import { Button, Form, Segment, Header, Item, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import capitalize from 'capitalize';
import moment from 'moment';

import { updateUserProfile } from "../../../../../../store/actions/index";
import Input from '../../../../../components/UI/Input/input';
import {
  required,
  nameLenght,
  postcodeLenght,
  number,
  phoneNumber,
  isAlphaNumeric,
  isAlphabet
} from "../../../../../../shared/validation";


class RegisterUserInfo extends Component {
  
  render() {
    const { invalid, submitting, pristine, handleSubmit, updateUserProfile } = this.props;
    
    const options = [
      { key: 'unitedKingdom', text: 'United Kingdom', value: 'unitedKingdom' },
      { key: 'germany', text: 'Germany', value: 'germany' },
      { key: 'spain', text: 'Spain', value: 'spain' },
      { key: 'pulahara', text: 'Pulahara', value: 'pulahara' },
      { key: 'japolanda', text: 'Japolanda', value: 'japolanda' },
      { key: 'curdistan', text: 'Curdistan', value: 'curdistan' }
    ];
    
    return (
     
     <Segment size='big'>
       <Header content='Demographic Information'/>
       <Item>
         <Item.Meta>Use this form to submit your information</Item.Meta>
         <Segment inverted>
           <Grid centered>
             <Form onSubmit={handleSubmit(updateUserProfile)}>
               <Field
                name="firstName"
                component={Input}
                type="text"
                label="First Name"
                inputtype="input"
                validate={[ required, nameLenght, isAlphabet ]}
                normalize={capitalize}/>
               
               <Field
                name="lastName"
                component={Input}
                type="text"
                label="Last Name"
                inputtype="input"
                validate={[ required, nameLenght, isAlphabet ]}
                normalize={capitalize}/>
               
               <label>Gender: </label>
               <Field
                name="gender"
                component={Input}
                inputtype="radio"
                type="radio"
                value="male"
                label="Male"
               />
               <Field
                name="gender"
                component={Input}
                inputtype="radio"
                type="radio"
                value="female"
                label="Female"
               />
               
               <Field
                name="phoneNumber"
                component={Input}
                type="text"
                label="Phone number"
                inputtype="input"
                validate={[ required, number, phoneNumber ]}
               />
               
               <Field
                name="dob"
                component={Input}
                label="Date of Birth"
                inputtype="date"
                dateFormat="DD-MM-YYYY"
                dropdownMode='select'
                maxDate={moment().subtract(1, 'years')}
                showYearDropdown
                showMonthDropdown
                validate={[ required ]}
               />
               
               <Field
                name="country"
                component={Input}
                type="text"
                label="Country/Region"
                inputtype="select"
                selection
                options={options}
                validate={[ required ]}
               />
               
               <Field
                name="postcode"
                component={Input}
                type="text"
                label="Postcode"
                inputtype="input"
                validate={[ required, postcodeLenght, isAlphaNumeric ]}
               />
               
               <Field
                name="address"
                component={Input}
                type="text"
                label="Address"
                inputtype="textarea"
                rows={3}
                validate={[ required ]}
               />
               
               <Field
                name="city"
                component={Input}
                type="text"
                label="Town/City"
                inputtype="input"
                validate={[ required ]}
               />
               
               
               <Field
                name="county"
                component={Input}
                type="text"
                label="County"
                inputtype="input"
                validate={[ required ]}
               />
               
               <Field
                name="newsletter"
                component={Input}
                inputtype="checkbox"
                label="Sign up for the Newsletter ?"/>
               
               <Button
                disabled={invalid || submitting || pristine}
                content='Submit Information'
                style={{ marginTop: '10px', marginBottom: '10px' }}
                color='teal'
                size='large'
               />
             </Form>
           </Grid>
         </Segment>
       </Item>
     </Segment>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    // initialValues: state.firebase.profile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserProfile: (user) => dispatch(updateUserProfile(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'register', enableReinitialize: true, destroyOnUnmount: false
})(RegisterUserInfo));