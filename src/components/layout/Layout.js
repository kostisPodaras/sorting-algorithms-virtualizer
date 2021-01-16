import React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import withStyles from '@material-ui/core/styles/withStyles';

import { compose } from 'core/utils';

import { Header, Sidebar } from './components';
import styles from './styles';

type Props = {
  classes: Object,
  children: HTMLElement | Object | [],
  width: string,
};

const Layout = ({ classes, children, width }: Props) => (
  <section className={classes.container}>
    <div className={classes.header}>
      <Header />
    </div>

    {isWidthUp('md', width) && (
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    )}

    <div className={classes.body}>{children}</div>
  </section>
);

export default compose(withWidth(), withStyles(styles))(Layout);
