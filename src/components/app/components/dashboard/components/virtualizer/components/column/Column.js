import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
  // element: number,
  height: number,
};

const Column = ({
  classes,
  //  element,
  height,
}: Props) => (
  <div className={classes.column} style={{ height: `${height}%` }} />
);

export default withStyles(styles)(Column);
