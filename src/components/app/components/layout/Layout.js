import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Scrollbars } from 'react-custom-scrollbars';

import withScrollToTop from 'core/components/withScrollToTop';
import { compose } from 'core/utils';

import { Header, Footer, Sidebar, Snackbar } from './components';

import styles from './styles';

type Props = {
  classes: Object,
  children: HTMLElement | Object | [],
  refScrollToTopElement: (element: Object) => void,
};

const Layout = ({ classes, children, refScrollToTopElement }: Props) => (
  <section className={classes.container}>
    <Sidebar />
    <Header />
    <div className={classes.contentWrapper}>
      <Scrollbars
        universal
        // autoHeight
        // autoHeightMin="100vh"
        autoHeightMax="calc(100vh - 48px)"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        ref={refScrollToTopElement}>
        <Grid container direction="column" className={classes.content}>
          {children}
        </Grid>
      </Scrollbars>
    </div>
    <Footer />
    <Snackbar />
  </section>
);

export default compose(withScrollToTop, withStyles(styles))(Layout);
