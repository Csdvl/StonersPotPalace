// @flow
import React from 'react';
import { Segment, Label } from 'semantic-ui-react';

import FilterLink from './hoc_FilterLink';
import {ShopFilters} from '../../../../store/actions/shop/products';


const shopFilter = () => {
    return (
     <Segment>
       <Label content="Show:"/>
       <FilterLink filter={ShopFilters.SHOW_ALL}>
         All
       </FilterLink>
       <FilterLink filter={ShopFilters.SHOW_CAKES}>
         Cakes
       </FilterLink>
       <FilterLink filter={ShopFilters.SHOW_PP}>
         Pasties & Pastries
       </FilterLink>
       <FilterLink filter={ShopFilters.SHOW_PT}>
         Pies & Tarts
       </FilterLink>
       <FilterLink filter={ShopFilters.SHOW_TRAYBAKE}>
         Traybakes
       </FilterLink>
     </Segment>
    );
};


export default shopFilter;
