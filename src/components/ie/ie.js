import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { Logo } from 'components';

import styles from './styles';

type Props = {
  classes: Object,
};

const IE = ({ classes }: Props) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    direction="column"
    className={classes.container}>
    <Logo className={classes.logo} />
    <Typography align="center" variant="h1" className={classes.text}>
      This version of Internet Explorer is not supported...Please use a modern
      browser!
    </Typography>
  </Grid>
);

export default withStyles(styles)(IE);
