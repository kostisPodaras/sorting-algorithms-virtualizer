import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { Logo } from 'components';

import styles from './styles';

type Props = {
  classes: Object,
};

const Home = ({ classes }: Props) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    direction="column"
    className={classes.container}>
    <Logo />
    <Typography variant="h1" className={classes.text}>
      Authenticated Route!
    </Typography>
  </Grid>
);

export default withStyles(styles)(Home);
