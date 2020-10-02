import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Image from 'core/components/image';

import { logo } from './images';
import styles from './styles';

type Props = {
  className?: string,
  classes: Object,
};

const Logo = ({ className, classes, ...rest }: Props) => (
  <span className={className}>
    <Image content={logo} className={classes.image} {...rest} />
  </span>
);

Logo.defaultProps = {
  className: '',
};

export default withStyles(styles)(Logo);
