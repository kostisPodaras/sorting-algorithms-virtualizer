import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { Virtualizer } from './components';
import styles from './styles';

type Props = {
  classes: Object,
};

const Dashboard = ({ classes }: Props) => (
  <Grid className={classes.container}>
    <Virtualizer />
  </Grid>
);

export default withStyles(styles)(Dashboard);
