import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => (
  <div className={classes.container}>Desktop Header</div>
);

export default withStyles(styles)(Header);
