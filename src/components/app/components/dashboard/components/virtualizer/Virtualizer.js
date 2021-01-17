import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';
import { array } from 'models/array';

import { Column } from './components';
import styles from './styles';

type Props = {
  classes: Object,
  array: [],
};

// const array = [2, 37, 4, 30, 20, 100, 50, 200, 17, 43, 189];

const findMaxNumberOfArray = (array) => Math.max(...array);

const maxheight = (maxValue, currentValue) => (currentValue * 100) / maxValue;

const Virtualizer = ({ classes, array }: Props) => (
  <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="flex-end"
    className={classes.container}>
    {array.map((element) => (
      <Column
        element={element}
        height={maxheight(findMaxNumberOfArray(array), element)}
      />
    ))}
  </Grid>
);

export default compose(
  withModelProps({ array }),
  withStyles(styles),
)(Virtualizer);
