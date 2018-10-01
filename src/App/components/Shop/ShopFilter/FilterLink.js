import React from 'react';
import {Button} from 'semantic-ui-react';


const FilterLink = ({ active, children, onClick }) => (
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