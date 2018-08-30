import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class DeliveryInstructions extends Component {
  render() {
    return (
     <Segment size='big'>
       <Header content='Delivery Instructions'/>
       
     </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'deliveryInstructions'})(DeliveryInstructions));
