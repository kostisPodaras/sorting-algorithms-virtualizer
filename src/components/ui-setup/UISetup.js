import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';

import Meta from 'core/components/meta';
import { LocationProvider } from 'core/components/router';

import withUISetup from './withUISetup';
import theme from './theme';
import styles from './styles';

type UISetupStylesProps = {
  classes: Object,
  children: HTMLElement | Object | [],
};

const UISetupStyles = withStyles(styles)(
  ({ classes, children }: UISetupStylesProps) => (
    <>
      <CssBaseline />
      <div className={classes.container}>{children}</div>
    </>
  ),
);

type UISetupProps = {
  content?: Object,
  history: Object,
  children: HTMLElement | Object | [],
};

const UISetup = ({ content, history, children }: UISetupProps) => (
  <LocationProvider history={history}>
    <ThemeProvider theme={theme}>
      <Meta {...content.meta}>
        {/* eslint-disable react/no-unknown-property */}
        <html lang="en" />
      </Meta>
      <UISetupStyles>{children}</UISetupStyles>
    </ThemeProvider>
  </LocationProvider>
);

UISetup.defaultProps = {
  content: {},
};

export default withUISetup(UISetup);
