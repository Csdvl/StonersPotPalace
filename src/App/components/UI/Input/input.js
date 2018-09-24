import React from 'react';
import { Label, Input, TextArea, Select, Radio, Checkbox, Form, Grid } from 'semantic-ui-react';

import moment from "moment/moment";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const input = (props) => {
  
  const { meta, label, input: { onChange, value, ...restInput }, type, rows, multiple, options, maxDate, minDate, ...rest } = props;
  let inputElement = null;
  
  switch (props.inputtype) {
    case ('text'):
      inputElement = <Input
       {...rest}
       // value={value}
       type={type}
       {...restInput}/>;
      break;
    
    case ('textarea'):
      inputElement = <TextArea
       {...rest}
       value={value || ''}
       rows={rows}
       {...restInput}/>;
      break;
    
    case ('select'):
      inputElement = <Select
       {...rest}
       value={value || ''}
       onChange={(e, data) => onChange(data.value)}
       multiple={multiple}
       options={options}
       {...restInput}
      />;
      break;
    
    case ('date'):
      inputElement = <DatePicker
       {...rest}
       selected={value ? moment(value, 'X') : null}
       onChange={onChange}
       maxDate={maxDate || null}
       minDate={minDate || null}
       {...restInput}
      />;
      break;
    
    case ('radio'):
      inputElement = <Radio
       {...rest}
       onChange={onChange}
       value={value || ''}
       type={type}
       {...restInput}
      />;
      
      break;
    
    case ('checkbox'):
      inputElement = <Checkbox
       {...rest}
       onChange={(e, { checked }) => onChange(checked)}
       type={type}
       value={value || ''}
       {...restInput}
      />;
      break;
    
    default:
      inputElement = <Input
       {...rest}
       type={type}
       value={value || ''}
       {...restInput}/>;
  }
  
  return (
     <Form.Field style={{ marginTop: '10px' }} >
       <Label style={{ marginRight: '10px', marginBottom: '10px' }} color='orange' size='large'>{label}</Label>
       {inputElement}
       {(meta.error && meta.touched && !meta.active) && (
        <Label color='red' style={{ marginLeft: '10px', marginTop: '10px' }} size='large'>{meta.error}</Label>)}
     </Form.Field>
  );
};


export default input;