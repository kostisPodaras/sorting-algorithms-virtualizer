import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Text from 'components/text';
import withForm from './withForm';
import { mapProps } from './utils';

type Props = {
  color?: string,
  formClass?: string,
  input?: Object,
  label: string,
  value?: string,
};

const restrictMUIComponentProps = ({ defaultValue, ...rest }) => mapProps(rest);

const CheckBoxOnly = withForm(restrictMUIComponentProps)(Checkbox);

const CheckBoxWithLabel = ({
  color,
  formClass,
  input,
  label,
  value,
}: Props) => {
  const labelNode = <Text text={label} />;
  return (
    <FormControlLabel
      className={formClass}
      control={
        <CheckBoxOnly
          checked={!!input.value}
          {...input}
          value={value}
          color={color}
        />
      }
      label={labelNode}
    />
  );
};

CheckBoxWithLabel.defaultProps = {
  color: 'primary',
  formClass: '',
  input: {
    value: '',
  },
  value: '',
};

export default CheckBoxWithLabel;
