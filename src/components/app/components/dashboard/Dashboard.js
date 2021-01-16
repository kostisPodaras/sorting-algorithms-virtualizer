import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Dashboard = ({ classes }: Props) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    direction="column"
    className={classes.container}>
    Dashboard
  </Grid>
);

export default withStyles(styles)(Dashboard);
