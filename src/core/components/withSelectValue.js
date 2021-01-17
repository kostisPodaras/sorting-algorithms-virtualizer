import React, { useState } from 'react';

const withSelectValue = (Component) => (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <Component {...props} selectValue={value} onSelect={handleChange} />;
};

export default withSelectValue;
