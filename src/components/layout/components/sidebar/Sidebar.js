import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Sidebar = ({ classes }: Props) => (
  <div className={classNames(classes.container)}>Sidebar</div>
);

export default withStyles(styles)(Sidebar);
