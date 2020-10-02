import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';

import { Logo } from 'components';
import { signOutUser } from 'models/user';

import styles from './styles';

type Props = {
  classes: Object,
  signOutUser: () => {},
};

const Home = ({ classes, signOutUser }: Props) => (
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
    <Typography onClick={signOutUser} variant="h1" className={classes.text}>
      Sign Out
    </Typography>
  </Grid>
);

export default compose(
  withModelProps({ signOutUser }),
  withStyles(styles),
)(Home);
