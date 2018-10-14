// @flow
import React from 'react';
import {Button} from 'semantic-ui-react';


type FilterLinkProps = {
  active: boolean,
  children: Object,
  onClick: Function
};

const FilterLink = ({ active, children, onClick }: FilterLinkProps) => (
 <Button
  onClick={onClick}
  disabled={active}
  style={{
    marginLeft: '4px',
  }}
 >
   {children}
 </Button>
);


export default FilterLink;