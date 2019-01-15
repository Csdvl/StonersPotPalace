// @flow
import React from 'react';
import { Label, Input, TextArea, Select, Radio, Checkbox, Form } from 'semantic-ui-react';

import moment from "moment/moment";
import DatePicker from 'react-datepicker';
// $FlowFixMe: suppressing this error until we can refactor
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import type {FormProps} from 'redux-form/lib/types';



type InputProps = {
  meta: {
    error: boolean,
    active: boolean,
    touched: boolean
  },
  inputtype: string,
  label: string,
  input: Object,
  type: string,
  rows: number,
  multiple: number,
  options: Array<Object>,
  maxDate: number,
  minDate: number
} & FormProps;

const input = ({ meta, inputtype, label, input: { onChange, value, ...restInput }, type, rows, multiple, options, maxDate, minDate, ...rest }: InputProps) => {
  
  let inputElement = null;
  
  switch (inputtype) {
    case ('text'):
      inputElement = <Input
       {...rest}
       value={value }
       onChange={(e, { value }) => onChange(value)}
       type={type}
       {...restInput}/>;
      break;
    
    case ('textarea'):
      inputElement = <TextArea
       {...rest}
       value={value }
       onChange={(e, { value }) => onChange(value)}
       rows={rows}
       {...restInput}/>;
      break;
    
    case ('select'):
      inputElement = <Select
       {...rest}
       value={value || ''}
       onChange={(e, { value }) => onChange(value)}
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
       onChange={(e, { value }) => onChange(value)}
       value={value}
       type={type}
       {...restInput}
      />;
      
      break;
    
    case ('checkbox'):
      inputElement = <Checkbox
       {...rest}
       onChange={(e, { checked }) => onChange(checked)}
       checked={value}
       type={type}
       {...restInput}
      />;
      break;
    
    default:
      inputElement = <Input
       {...rest}
       type={type}
       value={value }
       onChange={(e, { value }) => onChange(value)}
       {...restInput}/>;
  }
  
  return (
     <Form.Field style={{ marginTop: '10px' }} >
       <Label style={{ marginRight: '10px', marginBottom: '10px' }} color='orange' size='large' data-test={label}>{label}</Label>
       {inputElement}
       {(meta.error && meta.touched && !meta.active) && (
        <Label color='red' style={{ marginLeft: '10px', marginTop: '10px' }} size='large'>{meta.error}</Label>)}
     </Form.Field>
  );
};


export default input;
