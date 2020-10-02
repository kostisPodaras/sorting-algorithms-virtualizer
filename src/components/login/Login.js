import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withModelProps } from 'core/components/model-props';
import withModelActivation from 'core/components/withModelActivation';
import { compose } from 'core/utils';

import { signInUser } from 'models/user';
import { Logo } from 'components';

import { epics } from './ui-model';
import styles from './styles';

type Props = {
  classes: Object,
  signInUser: () => void,
};

const Login = ({ classes, signInUser }: Props) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    direction="column"
    className={classes.container}>
    <Logo />
    <Typography variant="h1" onClick={signInUser} className={classes.text}>
      Enter
    </Typography>
  </Grid>
);

export default compose(
  withModelActivation({ epics }),
  withModelProps({
    signInUser,
  }),
  withStyles(styles),
)(Login);
