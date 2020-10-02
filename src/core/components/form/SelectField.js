import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from './TextField';

type Props = {
  input: Object,
  content: [],
};

const SelectField = ({
  content,
  input: { value, onChange, ...other },
  ...rest
}: Props) => (
  <TextField
    {...other}
    {...rest}
    select
    SelectProps={{
      ...other,
      value,
      onChange,
    }}>
    {content ? (
      content.map(({ key, value }) => (
        <MenuItem key={key} value={value}>
          {value}
        </MenuItem>
      ))
    ) : (
      <MenuItem>No value</MenuItem>
    )}
  </TextField>
);

export default SelectField;
