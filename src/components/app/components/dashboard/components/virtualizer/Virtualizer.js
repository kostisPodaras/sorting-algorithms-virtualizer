import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { Column } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const array = [2, 37, 4, 30, 20, 100, 50, 200, 17, 43, 189];

const findMaxNumberOfArray = (array) => Math.max(...array);

const maxheight = (maxValue, currentValue) => (currentValue * 100) / maxValue;

const Virtualizer = ({ classes }: Props) => (
  <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="flex-end"
    className={classes.container}>
    {array.map((element) => (
      <Column
        // key={index}
        element={element}
        height={maxheight(findMaxNumberOfArray(array), element)}
      />
    ))}
  </Grid>
);

export default withStyles(styles)(Virtualizer);
