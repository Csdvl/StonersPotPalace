// @flow
import * as React from 'react';
import {Component} from 'react';
import { Item, Label } from 'semantic-ui-react';

import * as types from '../../../../Types/index';
import UserOrder from './UserOrder/UserOrder';
import Spinner from '../../UI/Spinner/Spinner';


type Props = {
  fetchOrdersInit: types.FetchOrdersInit,
  orders: types.Orders,
};

class userOrders extends Component <Props> {
  
  async componentDidMount() {
    const { fetchOrdersInit } = this.props;
    
    fetchOrdersInit();
  }
  
  render() {
    const { orders } = this.props;
    let userOrders = <Spinner/>;
    
    if ( orders.length > 0 ) {
      userOrders = orders.map(order =>
       <UserOrder order={order}/>
      );
    }
    // find a solution if there are no orders
    // if (  !Array.isArray(orders) && !orders.length) {
    //   userOrders = <Label content='You didint place any orders yet'/>
    // }

    return (
     <Item.Group>
       {userOrders}
     </Item.Group>
    );
  }
};

export default userOrders;
